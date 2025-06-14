import mongoose from "mongoose";
import PostSchema from "./post.schema.js";
import UserSchema from "../users/user.schema.js";

const postModel = mongoose.model("Post", PostSchema);
const userModel = mongoose.model("User", UserSchema);

export default class PostRepository {
  async addPost(email, content) {
    const user = await userModel.findOne({ email: email });
    const post = new postModel({ content: content, author: user._id });
    await post.save();
    return post;
  }

  async getPostById(postId) {
    const post = await postModel.findById(postId);
    return post;
  }

  async getPostByUserId(userId) {
    const posts = await postModel.find({ author: userId });
    return posts;
  }

  async getAllPosts() {
    const posts = await postModel.find({});
    return posts;
  }

  async deletePostById(postId) {
    const deletedPost = await postModel.findByIdAndDelete(postId);
    return deletedPost;
  }

  async updatePost(postId, content) {
    const post = await postModel.findById(postId);
    if (content) {
      post.content = content;
      await post.save();
    }
    return post;
  }
}
