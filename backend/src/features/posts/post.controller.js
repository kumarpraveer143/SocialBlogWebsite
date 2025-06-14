import UserRepository from "../users/user.repository.js";
import PostRepository from "./post.repository.js";

export default class PostController {
  constructor() {
    this.postRepository = new PostRepository();
    this.userRepository = new UserRepository();
  }

  async addPost(req, res) {
    const { content } = req.body;
    const { email } = req.cookies;
    try {
      const post = await this.postRepository.addPost(email, content);
      res.status(200).json({ success: true, msg: post });
    } catch (err) {
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }

  async getPostById(req, res) {
    const postId = req.params.postId;
    try {
      const post = await this.postRepository.getPostById(postId);
      if (!post) {
        return res.status(404).json({ success: false, msg: "Post not found!" });
      }
      return res.status(200).json({ success: true, msg: post });
    } catch (err) {
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }

  async getPostOfLoggedUser(req, res) {
    const { email } = req.cookies;
    try {
      const user = await this.userRepository.findByEmail(email);
      const posts = await this.postRepository.getPostByUserId(user._id);
      if (!posts) {
        return res
          .status(404)
          .send({ success: false, msg: "Currently no Post found!" });
      }
      return res.status(200).json({ success: true, msg: posts });
    } catch (err) {
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }

  async getAllPosts(req, res) {
    try {
      const posts = await this.postRepository.getAllPosts();
      return res.status(200).json({ success: true, msg: posts });
    } catch (err) {
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }

  async deletePost(req, res) {
    const { postId } = req.params;
    const post = await this.postRepository.deletePostById(postId);
    if (!post) {
      return res.status(404).json({ success: false, msg: "Post not Found!" });
    }
    return res.status(200).json({ success: true, msg: post });
  }

  async updatePost(req, res) {
    const { content } = req.body;
    const { postId } = req.params;
    try {
      const updatedPost = await this.postRepository.updatePost(postId, content);
      return res.status(200).json({ success: true, msg: updatedPost });
    } catch (err) {
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }
}
