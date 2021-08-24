const express = require("express");
const router = express.Router();
const {getPosts, getPost, getPostsBySearch, createPost, updatePost, deletePost, likePost, commentPost} = require("../controllers/posts");
const auth = require("../middleware/auth");
// import { getPosts, getPost, getPostsBySearch, createPost, updatePost, deletePost, likePost, commentPost } from "../controllers/posts.js";
// import auth from "../middleware/auth.js";


router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);

module.exports = router;