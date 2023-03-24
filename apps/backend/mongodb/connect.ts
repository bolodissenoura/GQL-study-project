import mongoose from "mongoose";

mongoose
  .set("strictQuery", false)
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  .connect(process.env.MONGODB_API as string)
  .then(() => console.log("Mongodb connected"))
  .catch((error) => console.log(error));
