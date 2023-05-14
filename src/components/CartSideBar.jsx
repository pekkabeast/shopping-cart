import React, { useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "../styles/CartSideBar.css";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";

function CartSideBar(props) {
  // eslint-disable-next-line
  const { isActive, toggleCartVisibility, cart, setCart } = props;

  CartSideBar.defaultProps = {
    cart: [],
  };

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item[0].cost * item[1];
    });
    if (!Number.isNaN(sum)) {
      document.querySelector(".cart-totalCost").textContent = `Subtotal: $${(
        Math.round(sum * 100) / 100
      ).toFixed(2)}`;
    }
  }, [cart]);

  const updateCart = useCallback((event) => {
    if (
      (event.target.value === "" && document.activeElement !== event.target) ||
      event.target.value === "0"
    ) {
      setCart(
        cart.filter(
          (item) => item[0].id !== event.target.getAttribute("data-productid")
        )
      );
    } else if (event.target.value < 1000 && event.target.value > -1) {
      setCart(
        cart.map((item) => {
          if (item[0].id === event.target.getAttribute("data-productid")) {
            // eslint-disable-next-line
            return [item[0], parseInt(event.target.value, 10)];
          }
          return item;
        })
      );
    }
  });

  return (
    <div
      className={isActive ? "cartSideBar " : "cartSideBar hidden"}
      onClick={toggleCartVisibility}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          toggleCartVisibility();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div
        className={isActive ? "cart" : "cart hidden"}
        onClick={(event) => event.stopPropagation()}
        onKeyDown={(event) => event.stopPropagation()}
        role="button"
        tabIndex={0}
      >
        <h1>Shopping Cart</h1>
        <button
          type="button"
          className={
            isActive ? "close-cart-button" : "close-cart-button hide-button"
          }
          onClick={toggleCartVisibility}
        >
          <FontAwesomeIcon icon={faX} />
        </button>
        <div className="cart-list">
          {cart.map((item) => (
            <Cart item={item} setCart={updateCart} key={item[0].id} />
          ))}
        </div>
        <div className="cart-totalCost" />
        <NavLink
          to="/shop/catalog/all"
          className="add-items-btn"
          onClick={toggleCartVisibility}
        >
          Add Items
        </NavLink>
      </div>
    </div>
  );
}

export default CartSideBar;
