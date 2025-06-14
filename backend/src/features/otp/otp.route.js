import express from "express";
import OtpController from "./otp.controller.js";

const otpRouter = express.Router();
const otpController = new OtpController();

//route to send otp
otpRouter.post("/send", otpController.sendOtp);

//route to verify the otp
otpRouter.post("/verify", otpController.verifyOtp);

export default otpRouter;
