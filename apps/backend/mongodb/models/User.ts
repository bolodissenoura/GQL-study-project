import mongoose from "mongoose";

export interface UserInterface {
  email: string;
  password: string;
  name: string;
}

const userSchema = new mongoose.Schema<UserInterface>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
});

export const UserMongo = mongoose.model<UserInterface>("User", userSchema);
