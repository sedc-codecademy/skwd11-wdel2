import express from "express";
import { mongo_connection } from "./mongo-connection.js";
import productsRouter from "./routes/product.router.js";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());
server.use(productsRouter);

server.listen(3000, async () => {
  console.log("Server is up and running");
  await mongo_connection();
});
