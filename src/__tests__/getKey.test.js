import request from "supertest";
import { app } from "../../app.js";

test("GET /v1/api/payment/getkey should return key ", async () => {
	const res = await request(app).get("/v1/api/payment/getkey");
	expect(res.statusCode).toEqual(200);
	expect(res.body).toHaveProperty("key");
});
