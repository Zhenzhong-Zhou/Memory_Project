import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import indexRoutes from "./routes/index.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/", indexRoutes);
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
	.catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);