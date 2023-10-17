import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetProductsService } from "../../services/productApiService";
import {
  ProductDetailsCard,
  ProductDetailsContainer,
  ActionsContainer,
} from "./styled/ProductDetails.styled";
import { Box } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";

export const ProductDetails = ({ addToCart }) => {
  // useParams is hook to get the params from the URL
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  const productID = params.id;

  useEffect(() => {
    GetProductsService.getProductDetails(productID).then((product) => {
      setSingleProduct(product);
    });
  }, []);

  return (
    <ProductDetailsContainer>
      <ProductDetailsCard>
        <h1>Product title: {singleProduct.name} </h1>
        <Box
          sx={{
            marginTop: "20px",
          }}
        >
          <p>Product description: {singleProduct.description}</p>
          <p>Price: {singleProduct.price}</p>
        </Box>

        <ActionsContainer>
          <IconButton
            onClick={() => {
              /**
               * If we had BE endpoint for Cart
               * here on each click we would made that api call
               */
              addToCart(singleProduct._id);
            }}
            color="primary"
            aria-label="add to shopping cart"
          >
            <AddShoppingCartIcon
              sx={{
                width: "40px",
                height: "40px",
              }}
            />
          </IconButton>

          <IconButton color="primary" aria-label="add to shopping cart">
            <DeleteIcon
              sx={{
                width: "40px",
                height: "40px",
              }}
            />
          </IconButton>
        </ActionsContainer>
      </ProductDetailsCard>
      <Divider orientation="vertical" flexItem>
        Details
      </Divider>
      <img src={singleProduct.imageUrl} alt={singleProduct.name} />
    </ProductDetailsContainer>
  );
};
