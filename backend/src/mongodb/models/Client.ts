import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  email: String,
  urlFotoPerfil: String,
  celular: String,
});

export const ClientMongo = mongoose.model("Client", schema);
