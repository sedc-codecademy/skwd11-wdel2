export const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <div className="productDetails">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
      </div>

      <img src={product.imageUrl} alt={product.name} />
    </div>
  );
};
