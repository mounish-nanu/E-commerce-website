import { useEffect, useState, memo } from "react";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";
import Categories from "../Categories";


export default memo(function Products({
  increaseQuantity,
  decreaseQuantity,
  cart
}) {
  let [gp, setGp] = useState([]);
  let [isLoading, setLoading] = useState(true);
  useEffect(
    function () {
      fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          setGp(response);
          setLoading(false);
        });
    },
    [gp]
  );

  if (isLoading) {
    return (
      <img
        alt="loader"
        src="https://media.tenor.com/XasjKGMk_wAAAAAM/load-loading.gif"
      />
    );
  } else {
    return (
      <div>
        <Link to="/cart">View Cart </Link>
        <Categories />
        {gp.map((product, index) => {
          return (
            <ProductCard
              product={product}
              key={index}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              cart={cart}
            />
          );
        })}
      </div>
    );
  }
});