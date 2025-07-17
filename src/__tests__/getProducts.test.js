import request from "supertest";
import { app } from "../../app.js";

test("GET /v1/api/product/getProducts should  return array of products ", async () => {
	const res = await request(app).get("/v1/api/product/getProducts");
	expect(res.statusCode).toEqual(200);
	expect(res.body).toHaveProperty("data");
	expect(res.body).toHaveProperty("message");
});
