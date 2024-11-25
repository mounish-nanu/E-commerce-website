import { useContext } from "react";
import CartContext from "../../context/CartContext";
function AddToCart({ product }) {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  console.log("AddToCart", product.id);

  function increment() {
    increaseQuantity(product);
  }

  function decrease() {
    decreaseQuantity(product);
  }
  const quantity = cart[product.id] ? cart[product.id].quantity : 0;
  if (quantity === 0) {
    return (
      <div>
        <button onClick={increment}> Add to Cart</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={decrease}> - </button>
        <span> {quantity} </span>
        <button onClick={increment}> + </button>
      </div>
    );
  }
}

export default AddToCart;
