import express from "express";
import dotenv from "dotenv";
import connectToMongoose from "./src/config/mongoose.config.js";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();
import cookieParser from "cookie-parser";
import userRouter from "./src/features/users/user.route.js";
import postRouter from "./src/features/posts/post.route.js";
import jwtAuth from "./src/middlewares/jwtAuth.js";
import commentRouter from "./src/features/comments/comment.route.js";
import likeRouter from "./src/features/likes/like.route.js";
import friendRouter from "./src/features/friends/friend.route.js";
import otpRouter from "./src/features/otp/otp.route.js";

const app = express();
const port = process.env.PORT;

const corsOptions = { origin: "*" };

//Middlewares
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());

//Router Middleware
app.use("/api/users", userRouter);
app.use("/api/posts", jwtAuth, postRouter);
app.use("/api/comments", jwtAuth, commentRouter);
app.use("/api/likes", jwtAuth, likeRouter);
app.use("/api/friends", jwtAuth, friendRouter);
app.use("/api/otp", jwtAuth, otpRouter);

app.listen(port, () => {
  console.log("Server is up at the port", port);
  connectToMongoose();
});
