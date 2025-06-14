import mongoose from "mongoose";
import LikeSchema from "../likes/like.schema.js";

const CommentSchema = new mongoose.Schema({
  text: { type: String, required: true },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  likes: [LikeSchema],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default CommentSchema;
