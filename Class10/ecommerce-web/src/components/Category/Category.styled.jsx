import styled from "@emotion/styled";

// this means we are  styling div under different name =)
export const CategoryWrapper = styled("div")({
  minWidth: "200px",
  backgroundColor: "#EEEEFF",
  height: "200px",
  textTransform: "uppercase",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  color: "#004954",
  transition: "box-shadow 0.3s ease",
  ":hover": {
    boxShadow: "0px 0px 15px #d2fd78",
  },
});
