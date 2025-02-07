import serverless from "serverless-http";
import express from "express";

const app = express();

app.get("/", (_, response) => {
	response.json({
		message: "Ok!",
	});
});

export const handler = serverless(app);
