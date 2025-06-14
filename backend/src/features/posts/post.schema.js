import mongoose from "mongoose";
import LikeSchema from "../likes/like.schema.js";

const PostSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  likes: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Like", required: true },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

PostSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

export default PostSchema;
