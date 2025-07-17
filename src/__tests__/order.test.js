import request from "supertest";
import { app } from "../../app.js";

test("POST /v1/api/payment/order should return receipt ", async () => {
	const res = await request(app)
		.post("/v1/api/payment/order")
		.send({ id: "354781a9-97c4-41cd-a79d-4f543d16e7fd" });
	expect(res.statusCode).toEqual(200);
	expect(res.body).toHaveProperty("receipt");
});
