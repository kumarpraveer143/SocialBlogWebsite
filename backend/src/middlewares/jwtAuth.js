//import jsonwebtoken
import jwt from "jsonwebtoken";
import UserRepository from "../features/users/user.repository.js";

//make a function of jwtAuth
const jwtAuth = async (req, res, next) => {
  //access the token
  const token = req.cookies?.jwt;
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  try {
    const payload = jwt.verify(token, process.env.SECERET_KEY);
    const { name, email } = payload;
    res.cookie("name", name);
    res.cookie("email", email);
  } catch (err) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  next();
};

export default jwtAuth;
