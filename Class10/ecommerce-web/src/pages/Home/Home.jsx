import "./Home.css";
import Divider from "@mui/material/Divider";
import { categories } from "../../utils/shared/categories.const.js";
import { CategoryContainer } from "./styled/Home.styled";
import { Category } from "../../components/Category/Category";

export const Home = () => {
  return (
    <div className="homeContainer">
      <div className="introContainer">
        <div className="imageContainer"></div>
        <h1>
          Seamless Shopping Experience: Our user-friendly platform makes it easy
          to find, order, and track your favorite items.
        </h1>
      </div>
      <Divider>CATEGORIES</Divider>

      <CategoryContainer>
        {categories.map((category) => (
          <Category key={category} name={category} />
        ))}
      </CategoryContainer>
    </div>
  );
};
