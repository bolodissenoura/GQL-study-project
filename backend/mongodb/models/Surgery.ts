import mongoose from "mongoose";

interface User extends Document {
  [x: string]: any;
  email: string;
  password: string;
  name: string;
}

const schema = new mongoose.Schema({
  patient: String,
  doctor: String,
  date: String,
  hour: String,
  instrumentator: String,
  startingPoint: String,
  hospitalName: String,
  typeTag: String,
});

const userSchema = new mongoose.Schema<User>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  token: { type: String, required: true },
});

export const UserModel = mongoose.model<User>("User", userSchema);

export const SurgeryMongo = mongoose.model("Surgery", schema);
