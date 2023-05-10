import React from "react";
import PropTypes from "prop-types";

function Product(props) {
  const { product } = props;

  Product.propTypes = {
    product: PropTypes.shape({
      category: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <div id={product.id}>
      {product.productName}
      {product.cost}
    </div>
  );
}

export default Product;
