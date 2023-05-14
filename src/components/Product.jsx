import React from "react";
import PropTypes from "prop-types";
import "../styles/Product.css";
import { NavLink } from "react-router-dom";

function Product(props) {
  const { product } = props;

  Product.propTypes = {
    product: PropTypes.shape({
      category: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      imagePath: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <NavLink
      to={`/shopping-cart/shop/catalog/${product.category}/${product.id}`}
      className="product-nav"
    >
      <div id={product.id} className="product-card">
        <div className="image-container">
          <img src={product.imagePath} alt={product.productName} />
        </div>
        <div className="product-name">{product.productName}</div>
        <div className="product-cost">{`$${product.cost}`}</div>
      </div>
    </NavLink>
  );
}

export default Product;
