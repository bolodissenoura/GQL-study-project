import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  email: String,
  cpf: String,
  adress: String,
  tel: String,
});

export const ClientMongo = mongoose.model("Client", schema)