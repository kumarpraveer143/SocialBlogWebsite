import FriendRepository from "./friend.repository.js";

export default class FriendController {
  constructor() {
    this.friendRepository = new FriendRepository();
  }

  async getPendingRequest(req, res) {
    const { email } = req.cookies;
    try {
      const pendingReq = await this.friendRepository.pendingRequest(email);
      res.status(200).json({ success: true, msg: pendingReq });
    } catch (err) {
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }

  async getFriends(req, res) {
    const { userId } = req.params;
    try {
      const friends = await this.friendRepository.getFriends(userId);
      res.status(200).json({ success: true, msg: [friends] });
    } catch (err) {
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }

  async toggleFriends(req, res) {
    const { email } = req.cookies;
    const { friendId: userId2 } = req.params;
    try {
      const result = await this.friendRepository.toggleFriends(email, userId2);
      res.status(200).json({ success: true, msg: result });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }

  async responseToRequest(req, res) {
    const { friendId } = req.params;
    const { email } = req.cookies;
    const { status } = req.body;
    try {
      const result = await this.friendRepository.responseToRequest(
        email,
        friendId,
        status
      );
      res.status(200).json({ success: true, msg: result });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }
}
