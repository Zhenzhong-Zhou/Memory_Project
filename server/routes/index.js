import express from "express";

const router = express.Router();
router.get("/", (req, res) => {
	res.send("Welcome to Memory Backend!");
});

export default router;