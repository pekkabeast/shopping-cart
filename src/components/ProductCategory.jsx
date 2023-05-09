import React from "react";
import { useParams, useState } from "react-router-dom";
import "../styles/ProductCategory.css";

function ProductCategory() {
  const { productCategory } = useParams();

  const { product, setProduct } = useState([]);

  return <div className="product-category">{productCategory}</div>;
}

export default ProductCategory;
