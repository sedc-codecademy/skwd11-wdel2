export const validateCreateProductDTO = (req, res, next) => {
  const { productName, productDescription, productPrice, productImage } =
    req.body;

  if (!productName || !productDescription || !productPrice || !productImage) {
    return res.status(422).send({ message: "Request body is invalid" });
  }

  next();
};
