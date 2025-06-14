import LikeRepository from "./like.repository.js";

class LikeController {
  constructor() {
    this.likeRepository = new LikeRepository();
  }

  async getLikes(req, res) {
    const { likeId } = req.params;
    try {
      const like = await this.likeRepository.getLikeById(likeId);
      if (like) {
        return res.status(200).json({ success: true, msg: like });
      } else {
        return res.status(404).json({ success: false, msg: "No like found!" });
      }
    } catch (err) {
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }

  async toggleLike(req, res) {
    const { type } = req.query;
    const { email } = req.cookies;
    const { id } = req.params;
    let like;
    try {
      if (type == "Comment") {
        like = await this.likeRepository.toggleCommentLike(email, id, type);
      } else {
        like = await this.likeRepository.toggglePostLike(email, id, type);
      }
      return res.status(200).json({ success: true, msg: like });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, msg: "Internal server problem" });
    }
  }
}

export default LikeController;
