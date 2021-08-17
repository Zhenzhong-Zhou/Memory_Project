import axios from "axios";

// Need to change later: process.env.LOCAL_URL || "https://memory-timeline-project.herokuapp.com/posts";
const API = axios.create({ baseURL: "https://memory-timeline-project.herokuapp.com/" });

// Bearer token can change Any token
API.interceptors.request.use((req) => {
   if (localStorage.getItem("profile")) {
       req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
   }
   return req;
});

export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);