import express from "express";
import "dotenv/config.js";

const app = express();
const PORT = process.env.PORT || 80

app.get("/", (req, res) => {
	res.json({ message: "Message from back-end" });
});

app.listen(PORT, () => {
	console.log(`Server listens http://127.0.0.1:${PORT}`);
});
