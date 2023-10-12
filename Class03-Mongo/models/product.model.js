import mongoose from "mongoose";
import productSchema from "../mongo_schemas/product.schema.js";

class ProductModel {
  product_model;
  COLLECTION_NAME = "products";

  constructor() {
    this.product_model = mongoose.model(
      "product",
      productSchema,
      this.COLLECTION_NAME
    );
  }

  async getAllProducts() {
    const products = await this.product_model.find();

    return products;
  }

  async getProductById(productId) {
    const product = await this.product_model.findById(productId);

    return product;
  }
}

export default ProductModel;
