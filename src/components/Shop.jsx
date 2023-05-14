import React from "react";
import { useParams } from "react-router-dom";
import ShopNav from "./ShopNav";
import ProductCategory from "./ProductCategory";
import ProductDetail from "./ProductDetail";

import "../styles/Shop.css";

function Shop(props) {
  const { productList, setCart, currentCart } = props;

  Shop.defaultProps = {
    currentCart: [],
  };

  const params = useParams();

  return (
    <div className="shop">
      <ShopNav />
      {"productId" in params ? (
        <ProductDetail
          product={
            productList.filter((product) => product.id === params.productId)[0]
          }
          setCart={setCart}
          cart={currentCart}
        />
      ) : (
        <ProductCategory productList={productList} />
      )}
    </div>
  );
}

export default Shop;
