import express, { response } from "express";
import ProductsController from "../controllers/product.controller.js";
import { validateCreateProductDTO } from "../middlewares/products.validator.js";

const productsRouter = express.Router();

const productsController = new ProductsController();

productsRouter.get("/products", async (request, response) => {
  await productsController.getAllProducts(request, response);
});

productsRouter.get("/products/:id", async (request, response) => {
  await productsController.getById(request, response);
});

productsRouter.post(
  "/products",
  validateCreateProductDTO,
  async (request, response) => {
    await productsController.addProduct(request, response);
  }
);

productsRouter.put("/products/:id", async (request, response) => {
  await productsController.updateProduct(request, response);
});

productsRouter.delete("/products/:id", async (request, response) => {
  await productsController.deleteProduct(request, response);
});

export default productsRouter;
