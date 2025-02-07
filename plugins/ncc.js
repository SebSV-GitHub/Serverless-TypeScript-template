import path from "node:path";
import fs from "node:fs";
import ncc from "@vercel/ncc";
import archiver from "archiver";

const packageJSON = `{"type": "module"}`;

class NCC {
	static tags = ["build"];

	constructor(serverless, options, utils) {
		this.serverless = serverless;
		this.options = options;
		this.utils = utils;
		this.hooks = {
			"package:createDeploymentArtifacts": () => this.build(),
		};
	}

	async build() {
		const { servicePath } = this.serverless.config;
		const { functions } = this.serverless.service;
		const files = await Promise.allSettled(
			Object.entries(functions).map(async ([name, { handler }]) => {
				const [handlerFile] = handler.split(".");
				const filename = `${handlerFile}.ts`;

				const zipFilename = `${name}.zip`;
				const zipPath = path.join(servicePath, `.serverless/${zipFilename}`);

				const output = await ncc(path.join(servicePath, "src", filename), {
					minify: true,
				});

				const function_ = this.serverless.service.getFunction(name);
				function_.packages = {
					artifact: zipPath,
				};
				return { data: output.code, name: `${handlerFile}.js`, path: zipPath };
			})
		);

		await Promise.allSettled(
			files.map(async ({ value: { data, name, path } }) => {
				return new Promise((resolve, reject) => {
					const archive = archiver("zip", { zLib: { level: 9 } });
					const output = fs.createWriteStream(path);
					output.on("close", () => {
						resolve();
					});
					archive.on("error", (error) => {
						reject(error);
					});

					archive.pipe(output);

					archive.append(data, { name });
					archive.append(packageJSON, { name: "package.json" });

					archive.finalize();
				});
			})
		);

		this.utils.log("Done");
	}
}

export default NCC;
