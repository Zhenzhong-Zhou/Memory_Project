// import express from "express";
// import expressLayouts from "express-ejs-layouts";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
//
// import indexRoutes from "./routes/index.js"
// import postRoutes from "./routes/posts.js";
// import userRoutes from "./routes/users.js";
if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
// dotenv.config();
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout")
app.use(expressLayouts);
app.use(express.static("public"));

const PORT = process.env.PORT || 9000;
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
	.catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

app.use("/", indexRouter);
// app.use("/posts", postRoutes);
// app.use("/user", userRoutes);



