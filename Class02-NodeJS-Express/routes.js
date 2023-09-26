import express from "express";
import chalk from "chalk";
import { timeOfRequest } from "./middlewares/timelogging.middleware.js";
import { writeFile, readFile } from "./services/file_services.js";

const router = express.Router();

router.use((request, response, next) => {
  console.log(
    chalk.green("Our first middleware intercepted the requests made.")
  );

  next();
});

router.get("/", (request, response) => {
  console.log(request.url);
  console.log(request.method);
  /**
   * request => contains the information about the request made to the EP.
   * response => we return something back to the user
   */
  response.send("<h1>Server is live.</h1>");
});

// This middleware will only INTERCEPT /products
// router.use((req, res, next) => {
//   const time = new Date().toLocaleString();
//   console.log(chalk.green(`The /products endpoint accessed at: ${time}`));
//   next();
// });

// router.use(timeOfRequest);

// *** Specific middleware for specific ENDPOINT =)
router.get("/products", timeOfRequest, (_request, response) => {
  console.log(chalk.red("Request made to /products"));

  const content = readFile("./db/products.json");

  const products = JSON.parse(content);

  console.log(chalk.red("We are here"));

  response.send(products);
});

router.post("/products", (request, response) => {
  const requestBody = request.body;
  console.log("Request body is: ", requestBody);

  // Date.now => returns miliseconds of the time in THIS MOMENT
  const newProduct = {
    id: Date.now(), // TIMESTAMP => our trick for id value =)
    name: requestBody.name,
    price: requestBody.price,
  };

  const products = JSON.parse(readFile("./db/products.json"));
  console.log("PARSED PRODUCTS", products);
  products.push(newProduct);
  console.log("NEW PRODUCTS VALUE", products);
  writeFile("./db/products.json", JSON.stringify(products, null, 2));

  response.status(201).send({ message: "Product has been created." });
});

//localhost:3000/products/filter?priceGreatedThen=100
router.get("/products/filter", (request, response) => {
  /**
   * 1. check if there is path parametaer
   *   YES => executer logic for that path param
   *   NO => next() => so i can continue with the rest of the routes
   * 2. check if there is query parameter
   *   YES => execute logic for that query param
   *   NO => next() ...
   */
  const queryParams = request.query;
  console.log(queryParams);

  const valueOfPrice = queryParams.priceGreaterThen;
  const products = JSON.parse(readFile("./db/products.json"));

  const filteredProducts = products.filter(
    (product) => product.price >= Number(valueOfPrice)
  );

  response.send(filteredProducts);
});

// PATH PARAMETERS
router.get("/products/:id", (request, response) => {
  const pathParams = request.params;
  console.log(pathParams);
  const id = pathParams.id;

  const products = JSON.parse(readFile("./db/products.json"));

  const productFound = products.find((product) => product.id === +id);

  if (!productFound) {
    response
      .status(404)
      .send({ message: `Product with id: ${id} is not found` });
  }

  response.send(productFound);
});

export default router;
