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
        <NavLink to="/shop/cpus">
          <li>CPUs</li>
        </NavLink>
        <NavLink to="/shop/cpu-coolers">
          <li>CPU Coolers</li>
        </NavLink>
        <NavLink to="/shop/motherboards">
          <li>Motherboards</li>
        </NavLink>
        <NavLink to="/shop/memory">
          <li>Memory</li>
        </NavLink>
        <NavLink to="/shop/storage">
          <li>Storage</li>
        </NavLink>
        <NavLink to="/shop/video-card">
          <li>Video Card</li>
        </NavLink>
        <NavLink to="/shop/power-supplies">
          <li>Power Supplies</li>
        </NavLink>
        <NavLink to="/shop/cases">
          <li>Cases</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default ShopNav;
