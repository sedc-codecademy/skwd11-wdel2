import "./ProductCard.css";

export const ProductCard = ({ singleProduct }) => {
  return (
    <div className="productCard">
      <div className="productDetails">
        <h2>{singleProduct.name}</h2>
        <p>{singleProduct.description}</p>
        <p>Price: {singleProduct.price}</p>
      </div>

      <img src={singleProduct.imageUrl} alt={singleProduct.name} />
    </div>
  );
};
