import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  likeType: {
    type: String,
    enum: ["Post", "Comment"],
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default LikeSchema;
