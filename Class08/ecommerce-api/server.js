import express from "express";
import { mongo_connection } from "./mongo-connection.js";
import productsRouter from "./routes/product.router.js";

const server = express();

server.use(express.json());
server.use(productsRouter);

server.listen(3000, async () => {
  console.log("Server is up and running");
  await mongo_connection();
});
