import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Header from "./components/Header";
import ProductCategory from "./components/ProductCategory";
import Product from "./components/Product";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/catalog" element={<Shop />}>
          <Route path=":productCategory" element={<ProductCategory />}>
            <Route path=":product" element={<Product />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
