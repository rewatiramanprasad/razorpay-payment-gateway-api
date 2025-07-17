import dotenv from "dotenv";
import express from "express";
import Razorpay from "razorpay";
import { dbSeeding } from "./src/db/seeding.js";
import { paymentRouter } from "./src/route.js";
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV !== "local") {
	dotenv.config({ path: "./config.env" });
}
export const app = express();

dbSeeding();

app.use(express.json());
if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
	throw new Error(
		"Razorpay credentials are not set in the environment variables.",
	);
}

export const instance = new Razorpay({
	key_id: process.env.RAZORPAY_KEY_ID,
	key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.use(paymentRouter);
