import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

export const ProductCard = ({ singleProduct }) => {
  const navigate = useNavigate();

  return (
    <div
      className="productCard"
      onClick={() => navigate(`/product/details/${singleProduct._id}`)}
    >
      <div className="productDetails">
        <h2>{singleProduct.name}</h2>
        <p>{singleProduct.description}</p>
        <p>Price: {singleProduct.price}</p>
      </div>

      <img src={singleProduct.imageUrl} alt={singleProduct.name} />
    </div>
  );
};
