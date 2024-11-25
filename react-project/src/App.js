import "./styles.css";
import { useState } from "react";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import { Switch, Route } from "react-router-dom";
import CartContext from "./context/CartContext";
import NotFound from "./pages/NotFound";

export default function App() {
  const [cart, setCart] = useState({});

  function increaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price.value,
        quantity: 0
      };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
  }

  function decreaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={ProductsPage} />
          <Route exact={true} path="/cart" component={CartPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </CartContext.Provider>
  );
}
