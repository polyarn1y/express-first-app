import express from "express";
const app = express();

app.get("/", (req, res) => {
	res.json({ message: "Message from back-end" });
});

app.listen(80);
