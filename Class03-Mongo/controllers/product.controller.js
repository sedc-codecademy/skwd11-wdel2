import ProductModel from "../models/product.model.js";

class ProductsController {
  productModel;

  constructor() {
    this.productModel = new ProductModel();
  }

  // _request => _ means it is not used so we avoid the warning: "value is not used..."
  async getAllProducts(_request, response) {
    // RESULT RETURNED FROM MODEL
    const products = await this.productModel.getAllProducts();

    response.send(products);
  }

  async getById(request, response) {
    const params = request.params;
    //params is an object containing a key. the key is id
    console.log(params);
    const id = params.id;

    const product = await this.productModel.getProductById(id);

    response.send(product);
  }
}

export default ProductsController;
