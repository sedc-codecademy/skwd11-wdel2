import express from "express";
import mongoose from "mongoose";
import { mongo_connection } from "./mongo-connection.js";
import productSchema from "./mongo_schemas/product.schema.js";
import productsRouter from "./routes/product.router.js";

const server = express();

// EASY FETCHING DATA OF OUR MONGO ATLAS, AND products COLLECTION
// server.get("/products", async (request, response) => {
//   const products = await mongoose
//     .model("product", productSchema, "products")
//     .find();

//   response.send(products);
// });

server.use(productsRouter);

server.listen(3000, async () => {
  console.log("Server is up and running");
  await mongo_connection();
});
