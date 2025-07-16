import request from "supertest";
import { app } from "../../app.js";

test("GET /v1/api/health should return server health", async () => {
	const res = await request(app).get("/v1/api/health");
	expect(res.statusCode).toBe(200);
	expect(res.body).toHaveProperty("message", "server is healthy");
	console.log(res.body);
});
