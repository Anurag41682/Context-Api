import { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { CartContext } from "../context";
const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((accum, curr) => {
        return accum + Number(curr.price);
      }, 0),
    );
  }, [cart]);
  return (
    <>
      <span style={{ fontSize: 30, textAlign: "center", display: "block" }}>
        My Cart
      </span>
      <br />
      <span style={{ fontSize: 30, textAlign: "center", display: "block" }}>
        Total Cost: {total}
      </span>
      <div className="products">
        {cart.map((item) => (
          <SingleProduct key={item.id} prod={item} />
        ))}
      </div>
    </>
  );
};

export default Cart;
