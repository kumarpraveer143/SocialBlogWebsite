import express from "express";
import CommentController from "./comment.controller.js";

const commentRouter = express.Router();

const commentController = new CommentController();

//add a comment to specific post
commentRouter.post("/:postId", (req, res) => {
  commentController.addComment(req, res);
});

//get a comment to specific post
commentRouter.get("/:postId", (req, res) => {
  commentController.getComment(req, res);
});

//delete a comment to specific post
commentRouter.delete("/:commentId", (req, res) => {
  commentController.deleteComment(req, res);
});

//update a comment to post
commentRouter.put("/:commentId", (req, res) => {
  commentController.updateComment(req, res);
});

export default commentRouter;
