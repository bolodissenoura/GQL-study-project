import mongoose from "mongoose";

const schema = new mongoose.Schema({
  patient: String,
  doctor: String,
  tipo: String,
  distance: Number,
  date: String,
  hour: String,
  instrumentator: String,
  startingPoint: {
    title: String,
    fullAdress: String,
  },
  hospital: {
    title: String,
    fullAdress: String,
  },
  typeTag: String,
  toll: {
    totalTolls: Number,
    totalTollsPrice: Number,
  },
});

export const SurgeryMongo = mongoose.model("Surgery", schema);
