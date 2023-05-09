import React from "react";
import ShopNav from "./ShopNav";
import ProductList from "./ProductList";
import "../styles/Shop.css";

function Shop() {
  return (
    <div className="shop">
      <ShopNav />
      <ProductList />
    </div>
  );
}

export default Shop;
