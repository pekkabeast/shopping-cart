import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import "../styles/ProductCategory.css";
import Product from "./Product";

function ProductCategory(props) {
  const { productCategory } = useParams();

  const { productList } = props;

  ProductCategory.propTypes = {
    productList: PropTypes.arrayOf(
      PropTypes.shape({
        category: PropTypes.string.isRequired,
        productName: PropTypes.string.isRequired,
        cost: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        imagePath: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };

  return (
    <div className="product-list">
      {productCategory === "all"
        ? productList.map((product) => (
            <Product product={product} key={product.id} />
          ))
        : productList
            .filter((product) => product.category === productCategory)
            .map((filteredProduct) => (
              <Product product={filteredProduct} key={filteredProduct.id} />
            ))}
    </div>
  );
}

export default ProductCategory;
