import { useLocation } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./Products.css";

export const Products = ({ products }) => {
  const location = useLocation();
  const rawSearchValue = location.search;

  const splittedSearchValue = rawSearchValue.split("=");

  //const categoryValue = splittedSearchValue[1];
  // same as above but using distructuring of an array;
  const [_, rawCategoryValue] = splittedSearchValue;

  // rawCategoryValue.replace(/%20/g, " "); will execute if there is rawCategoryValue
  const categoryValue =
    rawCategoryValue && rawCategoryValue.replace(/%20/g, " ");

  // if we had BE
  // make api call here with the categoryValue
  const filteredProducts = categoryValue
    ? products.filter((product) => product.category === categoryValue)
    : products;

  return (
    <div className="productsContainer">
      {filteredProducts.map((product) => (
        <ProductCard key={product._id} singleProduct={product} />
      ))}
    </div>
  );
};
