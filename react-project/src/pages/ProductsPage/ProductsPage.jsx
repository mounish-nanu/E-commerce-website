import Products from "../../components/Products";

function ProductsPage({ increaseQuantity, decreaseQuantity, cart }) {
  console.log(increaseQuantity);
  return (
    <Products
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      cart={cart}
    />
  );
}

export default ProductsPage;
