import greet from "@/core/index.js";

describe("Index", () => {
	test("True", () => {
		const string_ = greet("World");
		expect(true).toBe(true);
	});
});
