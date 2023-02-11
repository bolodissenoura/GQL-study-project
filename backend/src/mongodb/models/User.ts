import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
});

export const UserMongo = mongoose.model("User", schema);
