export class GetProductsService {
  static getProducts = async () => {
    const response = await fetch("http://localhost:3000/products");
    const products = await response.json();

    return products;
  };

  static createProduct = async (product) => {
    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    console.log("RAW RESPONSE:", response);

    const result = await response.json();

    console.log("RESULT CREATE PRODUCT:", result);

    return result.id;
  };
}
