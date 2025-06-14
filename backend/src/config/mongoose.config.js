import mongoose from "mongoose";

const connectToMongoose = () => {
  mongoose
    .connect(process.env.URL)
    .then(() => {
      console.log("Mongoose is connected Successfully!");
    })
    .catch((err) => {
      console.log("Failed to connect Database!");
    });
};

export default connectToMongoose;