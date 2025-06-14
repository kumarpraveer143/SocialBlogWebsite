import bcrypt from "bcrypt";
import UserRepository from "./user.repository.js";
import jwt from "jsonwebtoken";

class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup(req, res) {
    const { name, email, password, gender } = req.body;
    try {
      const findUserByEmail = await this.userRepository.findByEmail(email);
      if (findUserByEmail) {
        return res
          .status(400)
          .json({ errMsg: "This email is already Registered!" });
      }
      const hashedPassword = await bcrypt.hash(password, 12);

      const user = await this.userRepository.signup(
        name,
        email,
        hashedPassword,
        gender
      );
      return res.status(201).send(user);
    } catch (err) {
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }

  async signin(req, res) {
    const { email, password } = req.body;
    try {
      const user = await this.userRepository.findByEmail(email);
      if (!user) {
        return res
          .json(401)
          .json({ status: false, msg: "Invalid Credentials" });
      }
      const name = user.name;
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (isValidPassword) {
        const token = jwt.sign({ name, email }, process.env.SECERET_KEY, {
          expiresIn: "1h",
        });
        res.cookie("jwt", token, { httpOnly: true, secure: true });
        user.token.push(token);
        await user.save();
        return res.status(200).json({ status: true, token: token });
      } else {
        return res
          .status(401)
          .json({ status: false, msg: "Invalid Credentials" });
      }
    } catch (err) {
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }

  async logout(req, res) {
    try {
      if (req.cookies?.jwt) {
        const token = req.cookies.jwt;
        const { email } = jwt.verify(token, "praveer");
        await this.userRepository.findAndDeleteToken(email, token);
        res.clearCookie("jwt");
        return res
          .status(200)
          .json({ status: true, mgs: "Logged Out Successfull!" });
      } else {
        return res
          .status(401)
          .json({ status: false, msg: "Already Logged Out!" });
      }
    } catch (err) {
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }

  async logoutAllDevices(req, res) {
    const token = req.cookies?.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ status: false, msg: "Already Logged Out!" });
    }
    const { email } = jwt.verify(token, "praveer");
    try {
      const user = await this.userRepository.findByEmail(email);
      res.clearCookie("jwt");
      user.token = [];
      await user.save();
      return res
        .status(200)
        .json({ status: true, msg: "Logged out from all Devices!" });
    } catch (err) {
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }

  async getDetails(req, res) {
    const { userId } = req.params;
    let user;
    try {
      user = await this.userRepository.getUserById(userId);
    } catch (err) {
      return res.status(404).json({ status: false, msg: "User not found!" });
    }
    return res.status(200).json({ status: true, user: user });
  }

  async getAllDetails(req, res) {
    try {
      const users = await this.userRepository.getAllDetails();
      if (!users) {
        return res
          .status(404)
          .json({ status: false, msg: "Currently no user found!" });
      }
      return res.status(200).json({ status: true, msg: users });
    } catch (err) {
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }

  async updateUser(req, res) {
    const { userId } = req.params;
    try {
      const user = await this.userRepository.getUserById(userId);
      if (!user) {
        return res.status(404).json({ status: false, msg: "User not found!" });
      }
      const { name, gender } = req.body;
      if (name) {
        user.name = name;
      }
      if (gender) {
        user.gender = gender;
      }
      await user.save();
      return res.status(200).send({ status: true, msg: user });
    } catch (err) {
      res.status(500).json({ success: false, msg: "Internal server problem!" });
    }
  }
}

export default UserController;
