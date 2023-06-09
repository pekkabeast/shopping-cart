import { NavLink } from "react-router-dom";
import React from "react";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <h2 className="home-desc">The future is now.</h2>

      <h2 className="shop-now">
        <NavLink to="/shop/catalog/all">Shop Now</NavLink>
      </h2>
    </div>
  );
}

export default Home;
