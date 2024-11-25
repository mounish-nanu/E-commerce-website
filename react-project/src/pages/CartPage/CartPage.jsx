import Cart from "../../components/Cart";

function CartPage({ cart }) {
  console.log(cart);
  return (
    <div>
      <Cart cart={cart} />
    </div>
  );
}
export default CartPage;
