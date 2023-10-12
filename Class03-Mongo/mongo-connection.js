import mongoose from "mongoose";

const MONGO_URL =
  "mongodb+srv://deri:deri@cluster0.bg54wtd.mongodb.net/?retryWrites=true&w=majority";

export const mongo_connection = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      dbName: "ecommerce",
    });
    console.log("Connected to mongo db.");
  } catch (error) {
    throw new Error("Connection to Mongo Atlas database failed.");
  }
};
