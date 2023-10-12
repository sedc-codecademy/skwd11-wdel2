import { ProductCard } from "../../components/ProductCard/ProductCard";

export const Products = ({ products }) => {
  console.log("Products in products component:", products);
  return (
    <div className="productsContainer">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};
