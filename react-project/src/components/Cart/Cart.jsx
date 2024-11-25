import { useContext } from "react";
import CartContext from "../../context/CartContext";
import useWindowSize from "../../hooks/useWindowSize";
function Cart() {
  const { cart } = useContext(CartContext);
  const cartList = cart ? Object.values(cart) : [];
  console.log(cartList);
  let { width, height } = useWindowSize();
  console.log(width);
  return (
    <div>
      <ul>
        {cartList.map((item) => (
          <li key={item.id}>
            {item.title} {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Cart;
