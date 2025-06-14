import mongoose from "mongoose";
import LikeSchema from "./like.schema.js";
import UserSchema from "../users/user.schema.js";
import CommentSchema from "../comments/comment.schema.js";
import PostSchema from "../posts/post.schema.js";

const likeModel = mongoose.model("Like", LikeSchema);
const userModel = mongoose.model("User", UserSchema);
const commentModel = mongoose.model("Comment", CommentSchema);
const postModel = mongoose.model("Post", PostSchema);

class LikeRepository {
  async toggleCommentLike(email, id, type) {
    const user = await userModel.findOne({ email: email });
    const user_Id = user._id;
    const comment = await commentModel.findById(id);
    const index = comment.likes.findIndex(
      (x) => x.user.toString() === user_Id.toString()
    );
    if (index == -1) {
      const newLike = new likeModel({ user: user_Id, id, likeType: type });
      comment.likes.push(newLike);
      await comment.save();
      await newLike.save();
      return newLike;
    } else {
      comment.likes.splice(index, 1);
      const like = await likeModel.findOneAndDelete({
        user: user_Id.toString(),
      });
      await like.save();
      await comment.save();
      return like;
    }
  }

  async toggglePostLike(email, id, type) {
    const user = await userModel.findOne({ email: email });
    console.log(user);
    const user_Id = user._id.toString();
    const post = await postModel.findById(id).populate("likes");
    console.log(post);
    if (!post) {
      return "Post not found";
    }
    const index = post.likes.findIndex(
      (like) => like.user.toString() === user_Id
    );
    if (index == -1) {
      const like = new likeModel({ user: user_Id, id, likeType: type });
      post.likes.push(like);
      await post.save();
      await like.save();
      return like;
    } else {
      post.likes.splice(index, 1);
      const like = await likeModel.findOneAndDelete({ user: user_Id });
      await post.save();
      return like;
    }
  }

  async getLikeById(id) {
    const like = await likeModel.findById(id);
    return like;
  }
}

export default LikeRepository;
