import React from "react";
import "../styles/ShopNav.css";

function ShopNav() {
  return (
    <nav className="shop-nav">
      <h2>Shop/</h2>
      <ul>
        <NavLink>
          <li>CPUs</li>
        </NavLink>
        <li>CPU Coolers</li>
        <li>Motherboards</li>
        <li>Memory</li>
        <li>Storage</li>
        <li>Video Card</li>
        <li>Power Supplies</li>
        <li>Cases</li>
      </ul>
    </nav>
  );
}

export default ShopNav;
