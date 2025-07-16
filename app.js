import dotenv from "dotenv";
import express from "express";
import Razorpay from "razorpay";
import { dbSeeding } from "./src/db/seeding.js";

export const app = express();

import { paymentRouter } from "./src/route.js";

dotenv.config({ path: "./config.env" });
dbSeeding();
const PORT = process.env.PORT || 3000;
app.use(express.json());
export const instance = new Razorpay({
	key_id: process.env.RAZORPAY_KEY_ID,
	key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.use(paymentRouter);
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}/v1/api/`);
});
