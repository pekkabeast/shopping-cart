import React from "react";
import "../styles/ProductDetail.css";

function ProductDetail(props) {
  const { product, setCart, cart } = props;

  ProductDetail.defaultProps = {
    cart: [],
  };

  function updateCart() {
    if (
      cart.length !== 0 &&
      cart.filter((item) => item[0] === product).length !== 0
    ) {
      setCart(
        cart.map((item) => {
          if (item[0] === product) {
            return [product, item[1] + 1];
          }
          return item;
        })
      );
    } else {
      setCart([...cart, [product, 1]]);
    }
  }

  return (
    <div className="product-detail">
      <div className="product-detail-side">
        <h2>{`Product Name: ${product.productName}`}</h2>
        <img src={`${product.imagePath}`} alt={product.productName} />
        <div className="cost">{`Price: $${product.cost}`}</div>
      </div>
      <button type="button" onClick={updateCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
