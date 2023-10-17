import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./Products.css";

export const Products = ({ products }) => {
  console.log("Products in products component:", products);
  return (
    <div className="productsContainer">
      {products.map((product) => (
        <ProductCard key={product._id} singleProduct={product} />
      ))}
    </div>
  );
};
