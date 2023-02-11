import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  urlFotoPerfil: String,
  celular: String,
});

export const ClientMongo = mongoose.model("Client", schema);
