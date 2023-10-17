import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ProductDetailsCard = styled("div")({
  borderRadius: "5px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "40%",
  justifyContent: "space-around",
  h1: {
    fontSize: "32px",
  },
  p: {
    fontSize: "24px",
  },
});

export const ProductDetailsContainer = styled("div")({
  border: "1px solid #004954",
  display: "flex",
  justifyContent: "space-between",
  img: {
    width: "40%",
    height: "500px",
  },
});

export const ActionsContainer = styled(Box)({
  width: "50%",
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
  border: "1px solid #D2FD78",
  borderRadius: "5px",
});
