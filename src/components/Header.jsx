import { NavLink, useLocation } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import "../styles/Header.css";

function Header(props) {
  const location = useLocation();

  const { toggleCartVisibility } = props;

  Header.propTypes = {
    toggleCartVisibility: PropTypes.func.isRequired,
  };

  return (
    <div
      className={`main-header ${location.pathname === "/" ? "dark" : "light"}`}
    >
      <h3>fakeStore.</h3>
      <nav className="nav-links">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/shop/catalog/all">
          <li>Shop</li>
        </NavLink>
        <li>
          <button
            type="button"
            onClick={toggleCartVisibility}
            className="cart-button"
          >
            Cart
          </button>
        </li>
      </nav>
    </div>
  );
}

export default Header;
