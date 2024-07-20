import { useContext } from "react";
import { CartContext } from "../context";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="product">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: "bold" }}>{prod.name}</span>
        <span> &#8377; {prod.price}</span>
      </div>
      {cart.some((item) => item.id === prod.id) ? (
        <button
          className="productBtn"
          onClick={() => {
            const updatedCart = cart.filter((item) => {
              return item.name !== prod.name;
            });
            setCart(updatedCart);
          }}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="productBtn"
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};
export default SingleProduct;
