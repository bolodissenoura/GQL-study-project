import mongoose from "mongoose";

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

export const SurgeryMongo = mongoose.model("Surgery", schema);
