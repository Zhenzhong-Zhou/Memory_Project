const express = require("express");
const router = express.Router();
const Post = require("../models/postMessage");

// All Creators Route
router.get("/", (req, res) => {
	res.render("creators/index", {
		post: new Post()
	});
});

// New Creator Route
router.get("/new", (req, res) => {
	res.render("creators/new");
});

// Create Creator Route
router.post("/", (req, res) => {
	res.send("Create");
});

module.exports = router;