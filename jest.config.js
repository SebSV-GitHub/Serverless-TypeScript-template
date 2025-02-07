import fs from "node:fs";
import { createDefaultEsmPreset, pathsToModuleNameMapper } from "ts-jest";

const { compilerOptions } = JSON.parse(
	fs.readFileSync("./tsconfig.json", { encoding: "utf8" })
);

const defaultEsmPreset = createDefaultEsmPreset();

const config = {
	testEnvironment: "node",
	...defaultEsmPreset,
	moduleNameMapper: {
		"^(\\.{1,2}/.*)\\.js$": "$1",
		...pathsToModuleNameMapper(compilerOptions.paths, {
			prefix: "<rootDir>/",
			useESM: true,
		}),
	},
};

export default config;
