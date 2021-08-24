import express from "express";
import expressLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();
app.set("view engine", "ejs");
app.set("views", "/views");
app.set("layout", "layouts/layout")
app.use(expressLayouts);
app.use(express.static("public"));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);
app.use("/", (req, res) => {
    res.send("Welcome to Memory Backend!");
});

const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);