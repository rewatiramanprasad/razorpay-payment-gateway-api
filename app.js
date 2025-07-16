import dotenv from "dotenv";
import express from "express";
import Razorpay from "razorpay";
import { dbSeeding } from "./src/db/seeding.js";

dotenv.config({ path: "./config.env" });
export const app = express();

import { paymentRouter } from "./src/route.js";

dbSeeding();

app.use(express.json());
console.log(process.env.RAZORPAY_KEY_ID);

export const instance = new Razorpay({
	key_id: process.env.RAZORPAY_KEY_ID,
	key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.use(paymentRouter);
