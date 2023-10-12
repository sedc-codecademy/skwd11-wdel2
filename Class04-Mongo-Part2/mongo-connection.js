import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

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
