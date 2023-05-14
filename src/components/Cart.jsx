import React from "react";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/Cart.css";

function Cart(props) {
  const { item, setCart, decreaseQuant, increaseQuant } = props;

  Cart.defaultProps = {
    item: [],
  };

  console.log(item);
  return (
    <div className="basket-item">
      <img
        src={`../${item[0].imagePath}`}
        alt={item[0].productName}
        className="cart-image"
      />
      <div className="basket-desc">
        <h2>{_.startCase(item[0].category)}</h2>
        <h3>{item[0].productName}</h3>
        <div className="quantity-bar" data-basketid={item[0].id}>
          <FontAwesomeIcon
            icon={faMinus}
            onClick={decreaseQuant}
            className="change-quant"
          />
          <input
            type="number"
            value={item[1] !== "invalid" ? item[1] : ""}
            onChange={setCart}
            data-productid={item[0].id}
          />
          <FontAwesomeIcon
            icon={faPlus}
            onClick={increaseQuant}
            className="change-quant"
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;
