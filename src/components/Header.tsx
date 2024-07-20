import { Link } from "react-router-dom";
import "./styles.css";
import { useContext } from "react";
import { CartContext } from "../context";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <header>
      <span className="header">Context Api Working Tutorial</span>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cart.length}) </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
