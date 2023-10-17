import { useState } from "react";
import { categories } from "../../utils/shared/categories.const.js";
import { GetProductsService } from "../../services/productApiService.js";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import "./CreateProduct.css";

export const CreateProduct = ({ handleSetProductsSecond }) => {
  const [draftProduct, setDraftProduct] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productImage: "",
    productCategory: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // DRY => Do not reapeat yourself
  const onValueChange = (value, propValue) => {
    setDraftProduct({
      ...draftProduct,
      [propValue]: value,
    });
  };

  const clearInputs = () => {
    setDraftProduct({
      productName: "",
      productDescription: "",
      productPrice: "",
      productImage: "",
      productCategory: "",
    });
  };

  const handleSubmit = async (event) => {
    if (isLoading) return;
    event.preventDefault();
    setIsLoading(true);

    // TODO: Instead of creating an literal object, we can have class entity for product
    // and create new instance of it
    const productRequestBody = {
      productName: draftProduct.productName,
      productDescription: draftProduct.productDescription,
      productPrice: Number(draftProduct.productPrice),
      productImage: draftProduct.productImage,
      productCategory: draftProduct.productCategory,
    };

    try {
      const id = await GetProductsService.createProduct(productRequestBody);

      handleSetProductsSecond({
        _id: id,
        name: productRequestBody.productName,
        description: productRequestBody.productDescription,
        imageUrl: productRequestBody.productImage,
        category: productRequestBody.productCategory,
        price: productRequestBody.productPrice,
      });

      clearInputs();
      setIsLoading(false);
    } catch (error) {
      console.log("Error happened");
    }
  };

  return (
    <>
      {isLoading && <LinearProgress />}
      <form>
        <div className="inputsContainer">
          <TextField
            id="outlined-basic"
            label="Product name"
            variant="outlined"
            onChange={(event) =>
              onValueChange(event.target.value, "productName")
            }
            value={draftProduct.productName}
          />

          <TextField
            id="outlined-basic"
            label="Product Description"
            variant="outlined"
            onChange={(event) =>
              onValueChange(event.target.value, "productDescription")
            }
            value={draftProduct.productDescription}
          />

          <TextField
            id="outlined-basic"
            label="Product Price"
            variant="outlined"
            onChange={(event) =>
              onValueChange(event.target.value, "productPrice")
            }
            value={draftProduct.productPrice}
          />

          <TextField
            id="outlined-basic"
            label="Product Image"
            variant="outlined"
            onChange={(event) =>
              onValueChange(event.target.value, "productImage")
            }
            value={draftProduct.productImage}
          />
        </div>

        <div className="optionsContainer">
          <FormControl>
            <InputLabel id="demo-simple-select-label">Categories</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={draftProduct.productCategory}
              label="Categories"
              onChange={(event) =>
                onValueChange(event.target.value, "productCategory")
              }
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Create Product
          </Button>
        </div>
      </form>
    </>
  );
};
