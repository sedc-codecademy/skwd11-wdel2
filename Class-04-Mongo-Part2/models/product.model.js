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
    /**
     * map the products as you want
     */
    return products;
  }

  async getProductById(productId) {
    const product = await this.product_model.findById(productId);
    console.log("PRODUCT", product);

    if (!product) throw new Error("Product is not found");

    return product;
  }

  async createProduct(productData) {
    const product = new this.product_model(productData);

    const savedProduct = await product.save();

    return String(savedProduct._id);
  }

  async updateExistingProduct(productId, productUpdateData) {
    // OPTION 1:
    // const product = await this.product_model.findById(productId);

    // const updatedProduct = {
    //   name: productUpdateData.name || product.name,
    //   price: productUpdateData.price || product.price,
    //   description: productUpdateData.description || product.description,
    //   imageUrl: productUpdateData.imageUrl || product.imageUrl,
    // };

    // await this.product_model.updateOne({ _id: productId }, updatedProduct);

    // OPTION 2:
    await this.product_model.findByIdAndUpdate(productId, productUpdateData);
  }

  async deleteProductByID(productId) {
    await this.product_model.findByIdAndDelete(productId);
  }
}

export default ProductModel;
