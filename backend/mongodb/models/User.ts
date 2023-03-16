import mongoose from "mongoose";

interface User extends Document {
  [x: string]: any;
  email: string;
  password: string;
  name: string;
}

const userSchema = new mongoose.Schema<User>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  // token: { type: String, required: true },
});

export const UserMongo = mongoose.model<User>("User", userSchema);
