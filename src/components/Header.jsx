import { NavLink, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";

function Header(props) {
  const location = useLocation();

  const { toggleCartVisibility, cart } = props;

  const [numItems, setNumItems] = useState(0);

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      if (!Number.isNaN(item[1])) {
        sum += 1;
      }
    });
    setNumItems(sum);
  }, [cart]);

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
          {numItems > 0 ? (
            <span className="cart-num-items">
              <FontAwesomeIcon icon={faCaretLeft} className="cart-icon" />
              {numItems}
            </span>
          ) : (
            ""
          )}
        </li>
      </nav>
    </div>
  );
}

export default Header;
