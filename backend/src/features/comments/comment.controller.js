import CommentRepository from "./comment.repository.js";

class CommentController {
  //add comment to specific posts
  constructor() {
    this.commentRepository = new CommentRepository();
  }

  async addComment(req, res) {
    const { email } = req.cookies;
    const { postId } = req.params;
    const { text } = req.body;
    try {
      const comment = await this.commentRepository.addComment(
        email,
        postId,
        text
      );
      return res.status(200).json({ success: true, msg: comment });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }

  async getComment(req, res) {
    const { postId } = req.params;
    try {
      const comments = await this.commentRepository.getComment(postId);
      if (!comments) {
        return res
          .status(404)
          .json({ success: false, msg: "No Commnet it now" });
      }
      return res.status(200).json({ success: true, msg: comments });
    } catch (err) {
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }

  async deleteComment(req, res) {
    const { commentId } = req.params;
    try {
      const deletedComment = await this.commentRepository.deleteComment(
        commentId
      );
      if (!deletedComment) {
        return res
          .status(404)
          .json({ success: false, msg: "Comment not found!" });
      }
      return res.status(200).json({ success: true, msg: deletedComment });
    } catch (err) {
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }

  async updateComment(req, res) {
    const { text } = req.body;
    const { commentId } = req.params;
    try {
      const updatedComment = await this.commentRepository.updateComment(
        commentId,
        text
      );
      return res.status(200).json({ success: true, msg: updatedComment });
    } catch (err) {
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }
}
export default CommentController;
