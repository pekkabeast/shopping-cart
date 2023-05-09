import React from "react";

import ShopNav from "./ShopNav";
import ProductCategory from "./ProductCategory";
import "../styles/Shop.css";

function Shop() {
  return (
    <div className="shop">
      <ShopNav />
      <ProductCategory />
    </div>
  );
}

export default Shop;
