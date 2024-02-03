import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.carts);

  return (
    <div className="container">
      <span className="logo">RDUX STORE</span>
      <div>
        <Link className="navLink " to={"/"}>
          Home
        </Link>
        <Link className="navLink" to={"/cart"}>
          Cart
        </Link>
        <span className="cartCount">Cart items: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
