import mongoose from "mongoose";
import UserSchema from "./user.schema.js";

const userModal = mongoose.model("User", UserSchema);

export default class UserRepository {
  async findByEmail(email) {
    const user = await userModal.findOne({ email: email });
    return user;
  }

  async signup(name, email, password, gender) {
    const user = new userModal({ name, email, password, gender });
    await user.save();
    return user;
  }

  async getUserById(id) {
    const user = await userModal.findById(id);
    return user;
  }

  async getAllDetails() {
    const users = await userModal.find({});
    return users;
  }

  async findAndDeleteToken(email, token) {
    const user = await userModal.findOne({ email: email });
    const index = user.token.indexOf(token);
    user.token.splice(index, 1);
    await user.save();
  }
}
