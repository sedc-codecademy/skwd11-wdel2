import { useNavigate } from "react-router-dom";
import { CategoryWrapper } from "./Category.styled";
import CategoryIcon from "@mui/icons-material/Category";

export const Category = ({ name }) => {
  const navigate = useNavigate();

  return (
    <CategoryWrapper onClick={() => navigate(`/products?category=${name}`)}>
      {name}
      <CategoryIcon sx={{ height: "100px", width: "100px" }} />
    </CategoryWrapper>
  );
};
