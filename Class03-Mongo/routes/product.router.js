import express from "express";
import ProductsController from "../controllers/product.controller.js";

const productsRouter = express.Router();

const productsController = new ProductsController();

// localhost:3000/products
productsRouter.get("/products", async (request, response) => {
  await productsController.getAllProducts(request, response);
});

// id = params => we can extract the id, using request.params
// localhost:3000/products/3
productsRouter.get("/products/:id", async (request, response) => {
  await productsController.getById(request, response);
});

export default productsRouter;
