import mongoose from "mongoose";
import FriendSchema from "./friend.schema.js";
import UserSchema from "../users/user.schema.js";

const friendModel = mongoose.model("Friend", FriendSchema);
const userModel = mongoose.model("User", UserSchema);

export default class FriendRepository {
  async pendingRequest(email) {
    const user = await userModel.findOne({ email: email });
    const pendingReq = await friendModel
      .find({
        addressee: user._id,
        status: "pending",
      })
      .populate("requester")
      .exec();
    return pendingReq;
  }

  async getFriends(userId) {
    const friends = await friendModel.findOne({
      $or: [
        { requester: userId, status: "accepted" },
        {
          addressee: userId,
          status: "accepted",
        },
      ],
    });
    return friends;
  }

  async toggleFriends(email, userId2) {
    const user = await userModel.findOne({ email: email });
    const userId1 = user._id.toString();
    const friendShip = await friendModel.find({
      $or: [
        { requester: userId1, addressee: userId2 },
        { requester: userId2, addressee: userId1 },
      ],
    });

    if (friendShip.length > 0) {
      await friendModel.findOneAndDelete({
        $or: [
          { requester: userId1, addressee: userId2 },
          { requester: userId2, addressee: userId1 },
        ],
      });
      return { message: "FriendShip Removed" };
    } else {
      const newFriendShip = new friendModel({
        requester: userId1,
        addressee: userId2,
      });
      console.log(newFriendShip);
      await newFriendShip.save();
      return newFriendShip;
    }
  }

  async responseToRequest(email, friendId, response) {
    const user = await userModel.findOne({ email: email });
    const userId = user._id;
    const friend = await friendModel.findOne({
      requester: friendId,
      addressee: userId,
    });
    if (friend) {
      if (response == "accept") {
        friend.status = "accepted";
      }
      if (response == "reject") {
        friend.status = "rejected";
      }
      await friend.save();
      return friend;
    }
    return "Something went wrong!";
  }
}
