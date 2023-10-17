import ProductModel from "../models/product.model.js";
import { ProductPropsMapper } from "../mapper/product.mapper.js";

class ProductsController {
  productModel;

  constructor() {
    this.productModel = new ProductModel();
  }

  async getAllProducts(_request, response) {
    try {
      const products = await this.productModel.getAllProducts();
      response.send(products);
    } catch (error) {
      response.status(400).send({ message: "Sorry something went wrong" });
    }
  }

  async getById(request, response) {
    const params = request.params;
    const id = params.id;

    try {
      const product = await this.productModel.getProductById(id);
      response.send(product);
    } catch (error) {
      response.status(404).send({
        time: Date.now(),
        message: `Product with id: ${id} was not found.`,
      });
    }
  }

  async addProduct(request, response) {
    const requestBodyDTO = request.body;

    const createProductProps =
      ProductPropsMapper.mapToCreateProductProps(requestBodyDTO);

    const productId = await this.productModel.createProduct(createProductProps);

    response.status(201).send({
      message: `Product created successfully with id: ${productId}`,
      id: productId,
    });
  }

  async updateProduct(request, response) {
    const { id } = request.params;
    const requestBodyDTO = request.body;

    try {
      await this.productModel.updateExistingProduct(id, requestBodyDTO);
      response.send({ message: `Product with id: ${id} was updated.` });
    } catch (error) {
      response.status(404).send({
        time: Date.now(),
        message: `Product with id: ${id} was not found.`,
      });
    }
  }

  async deleteProduct(request, response) {
    const { id } = request.params;

    try {
      await this.productModel.deleteProductByID(id);
      response.send({
        message: `Product with id: ${id} was successfully deleted.`,
      });
    } catch (error) {
      response.status(404).send({
        time: Date.now(),
        message: `Product with id: ${id} was not found.`,
      });
    }
  }
}

export default ProductsController;
