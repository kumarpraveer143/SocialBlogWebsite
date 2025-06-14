import express from "express";
import UserController from "./user.controller.js";

const userRouter = express.Router();

const userController = new UserController();

//route to register user
userRouter.post("/signup", (req, res) => {
  userController.signup(req, res);
});

//route to login user
userRouter.post("/signin", (req, res) => {
  userController.signin(req, res);
});

//route to logout user
userRouter.get("/logout", (req, res) => {
  userController.logout(req, res);
});

//route to logout all user
userRouter.get("/logout-all-devices", (req, res) => {
  userController.logoutAllDevices(req, res);
});

//route to get details of user
userRouter.get("/get-details/:userId", (req, res) => {
  userController.getDetails(req, res);
});

//route to get all the users
userRouter.get("/get-all-details", (req, res) => {
  userController.getAllDetails(req, res);
});

//route to update the user detail
userRouter.put("/update-details/:userId", (req, res) => {
  userController.updateUser(req, res);
});

export default userRouter;
