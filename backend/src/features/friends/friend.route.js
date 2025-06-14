import express from "express";
import FriendController from "./friend.controller.js";

const friendRouter = express.Router();
const friendController = new FriendController();
//toggle friend request
friendRouter.get("/toggle-friendship/:friendId", (req, res) => {
  friendController.toggleFriends(req, res);
});

//get pending request
friendRouter.get("/get-pending-requests", (req, res) => {
  friendController.getPendingRequest(req, res);
});

//get user friends
friendRouter.get("/get-friends/:userId", (req, res) => {
  friendController.getFriends(req, res);
});
//accept and reject the friend request
friendRouter.get("/response-to-request/:friendId", (req, res) => {
  friendController.responseToRequest(req, res);
});

export default friendRouter;
