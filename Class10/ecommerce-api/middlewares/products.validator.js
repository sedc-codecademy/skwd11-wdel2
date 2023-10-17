export const validateCreateProductDTO = (req, res, next) => {
  const {
    productName,
    productDescription,
    productPrice,
    productImage,
    productCategory,
  } = req.body;

  if (
    !productName ||
    !productDescription ||
    !productPrice ||
    !productImage ||
    !productCategory
  ) {
    return res.status(422).send({ message: "Request body is invalid" });
  }

  next();
};
