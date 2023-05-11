import { NavLink } from "react-router-dom";
import React from "react";
// import Background from "../assets/computer.jpg";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <h2 className="home-desc">The future is now.</h2>

      <h2 className="shop-now">
        <NavLink to="/shop">Shop Now</NavLink>
      </h2>
    </div>
  );
}

export default Home;
