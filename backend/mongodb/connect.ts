import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_API as string)
  .then(() => console.log("Mongodb connected"))
  .catch((error) => console.log(error));
