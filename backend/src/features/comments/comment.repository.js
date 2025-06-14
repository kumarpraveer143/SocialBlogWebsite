import mongoose from "mongoose";
import CommentSchema from "./comment.schema.js";
import UserSchema from "../users/user.schema.js";
import PostSchema from "../posts/post.schema.js";

const commentModel = mongoose.model("Comment", CommentSchema);
const userModel = mongoose.model("User", UserSchema);
const postModel = mongoose.model("Post", PostSchema);

class CommentRepository {
  async addComment(email, postId, text) {
    const user = await userModel.findOne({ email: email });
    const comment = new commentModel({
      text: text,
      author: new mongoose.Types.ObjectId(user._id),
    });
    await comment.save();
    const post = await postModel.findById(postId);
    post.comments.push(comment._id);
    await post.save();
    return comment;
  }

  async getComment(postId) {
    const post = await postModel.findById(postId).populate("comments").exec();
    return post;
  }

  //there is problem, we can't delete the comment reference in post schema
  // as only comment id is given?
  // please tell me if there is any other way possible?
  async deleteComment(id) {
    const comment = await commentModel.findByIdAndDelete(id);
    return comment;
  }

  async updateComment(commentId, text) {
    const comment = await commentModel.findById(commentId);

    if (comment.text != text) {
      comment.text = text;
      await comment.save();
    }
    return comment;
  }
}

export default CommentRepository;
