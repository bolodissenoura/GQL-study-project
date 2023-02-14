import mongoose from "mongoose";

const schema = new mongoose.Schema({
  patient: String,
  doctor: String,
  hospital: String,
  tipo: String,
  distance: Number,
  date: String,
});

export const SurgeryMongo = mongoose.model("Surgery", schema);
