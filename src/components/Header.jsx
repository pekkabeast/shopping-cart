import { NavLink, useLocation } from "react-router-dom";
import "../styles/Header.css";
import React from "react";

function Header() {
  const location = useLocation();
  return (
    <div
      className={`main-header ${location.pathname === "/" ? "dark" : "light"}`}
    >
      <h3>fakeStore.</h3>
      <nav className="nav-links">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/shop">
          <li>Shop</li>
        </NavLink>
        <li>Cart</li>
      </nav>
    </div>
  );
}

export default Header;
