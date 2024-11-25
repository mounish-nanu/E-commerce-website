import "./ProductCard.css";
import AddToCart from "../AddToCart";
import Rating from "../Rating";
import ReduxAddToCart from "../ReduxAddToCart";

function ProductCard({ product, increaseQuantity, decreaseQuantity, cart }) {

  return (
    <div className="card">
      <h2>{product.title}</h2>
      <h4>{product.price.value}</h4>
      <Rating rating={product.rating.value} maxRating={5} />
      <ReduxAddToCart product={product} />
    </div>
  );
}

export default ProductCard;