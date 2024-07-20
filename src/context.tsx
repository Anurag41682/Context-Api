import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
// CartProvider will wrap the whole component which need to use that state of cart
// CartContext instance will provide the cartContext.provider component which will get all the child that we will wrap inside CartProvider.
// then we can use useContext to use that CartContext to access the cart and setCart
