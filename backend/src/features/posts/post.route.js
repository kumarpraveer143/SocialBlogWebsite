import express from "express";
import PostController from "./post.controller.js";

const postRouter = express.Router();
const postController = new PostController();

//route to retrive all the posts of all the users
postRouter.get("/all", (req, res) => {
  postController.getAllPosts(req, res);
});

//route to create a post
postRouter.post("/", (req, res) => {
  postController.addPost(req, res);
});

//route to retrive
postRouter.get("/:postId", (req, res) => {
  postController.getPostById(req, res);
});

//route to retrive all the posts of logged in user
postRouter.get("/", (req, res) => {
  postController.getPostOfLoggedUser(req, res);
});

//delete a specific post
postRouter.delete("/:postId", (req, res) => {
  postController.deletePost(req, res);
});

//update a specific post
postRouter.put("/:postId", (req, res) => {
  postController.updatePost(req, res);
});

export default postRouter;
