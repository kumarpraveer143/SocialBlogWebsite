import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  email: {
    type: String,
    required: [true, "Email is required!"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
  },
  password: {
    type: String,
    minlength: [4, "Password should contain at least 4 characters"],
    required: [true, "Password is required"],
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: [true, "Gender is required"],
  },
  token: [{ type: String, required: true }],
});

export default UserSchema;
