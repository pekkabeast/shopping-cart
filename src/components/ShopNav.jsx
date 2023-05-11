import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "../styles/ShopNav.css";
import _ from "lodash";

function ShopNav() {
  const { productCategory } = useParams();
  return (
    <nav className="shop-nav">
      <div>
        <h2>Shop /</h2>
        <div className="shop-nav-subtitle">{_.upperCase(productCategory)}</div>
      </div>
      <ul>
        <NavLink to="/shop/catalog/all">
          <li>All Components</li>
        </NavLink>
        <NavLink to="/shop/catalog/cpu">
          <li>CPUs</li>
        </NavLink>
        <NavLink to="/shop/catalog/cooler">
          <li>CPU Coolers</li>
        </NavLink>
        <NavLink to="/shop/catalog/motherboard">
          <li>Motherboards</li>
        </NavLink>
        <NavLink to="/shop/catalog/memory">
          <li>Memory</li>
        </NavLink>
        <NavLink to="/shop/catalog/storage">
          <li>Storage</li>
        </NavLink>
        <NavLink to="/shop/catalog/video_card">
          <li>Video Card</li>
        </NavLink>
        <NavLink to="/shop/catalog/power_supply">
          <li>Power Supplies</li>
        </NavLink>
        <NavLink to="/shop/catalog/case">
          <li>Cases</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default ShopNav;
