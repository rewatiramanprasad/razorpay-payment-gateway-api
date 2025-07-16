import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}/v1/api/`);
});
