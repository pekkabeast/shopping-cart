import React, { useState, useCallback } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { uniqueId } from "lodash";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Header from "./components/Header";
import ProductCategory from "./components/ProductCategory";
import ProductDetail from "./components/Product";
import "./styles/App.css";
import CartSideBar from "./components/CartSideBar";

function App() {
  const [productList] = useState([
    {
      category: "cpu",
      productName: "Ryzen",
      cost: 300,
      id: uniqueId(),
      imagePath: "../../assets/cpu_1.jpg",
    },
    {
      category: "cooler",
      productName: "Corsair",
      cost: 50,
      id: uniqueId(),
      imagePath: "../../assets/cooler_1.jpg",
    },
    {
      category: "motherboard",
      productName: "Asus",
      cost: 150,
      id: uniqueId(),
      imagePath: "../../assets/motherboard_1.jpg",
    },
    {
      category: "case",
      productName: "NZXT",
      cost: 100,
      id: uniqueId(),
      imagePath: "../../assets/case_1.jpg",
    },
    {
      category: "memory",
      productName: "G.Skill",
      cost: 150,
      id: uniqueId(),
      imagePath: "../../assets/memory_1.jpg",
    },
    {
      category: "video_card",
      productName: "Evga",
      cost: 800,
      id: uniqueId(),
      imagePath: "../../assets/video_card_1.jpg",
    },
    {
      category: "power_supply",
      productName: "Seasonic",
      cost: 500,
      id: uniqueId(),
      imagePath: "../../assets/power_supply_1.jpg",
    },
    {
      category: "storage",
      productName: "Sun Microsystems",
      cost: 80,
      id: uniqueId(),
      imagePath: "../../assets/storage_1.jpg",
    },
    {
      category: "cpu",
      productName: "Intel",
      cost: 350,
      id: uniqueId(),
      imagePath: "../../assets/cpu_2.jpg",
    },
    {
      category: "cooler",
      productName: "Razer",
      cost: 80,
      id: uniqueId(),
      imagePath: "../../assets/cooler_2.jpg",
    },
    {
      category: "motherboard",
      productName: "Gigabyte",
      cost: 200,
      id: uniqueId(),
      imagePath: "../../assets/motherboard_2.jpg",
    },
    {
      category: "case",
      productName: "Razer",
      cost: 90,
      id: uniqueId(),
      imagePath: "../../assets/case_2.jpg",
    },
    {
      category: "memory",
      productName: "Munchkin",
      cost: 120,
      id: uniqueId(),
      imagePath: "../../assets/memory_2.jpg",
    },
    {
      category: "video_card",
      productName: "Geforce",
      cost: 700,
      id: uniqueId(),
      imagePath: "../../assets/video_card_2.jpg",
    },
    {
      category: "power_supply",
      productName: "Evga",
      cost: 200,
      id: uniqueId(),
      imagePath: "../../assets/power_supply_2.jpg",
    },
    {
      category: "storage",
      productName: "Samsung",
      cost: 130,
      id: uniqueId(),
      imagePath: "../../assets/storage_2.jpg",
    },
  ]);

  const [sideBarActive, setSideBarActive] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleCartVisibility = useCallback((event) => {
    if (sideBarActive) {
      setSideBarActive(false);
    } else {
      setSideBarActive(true);
    }
    event.stopPropagation();
  });
  return (
    <HashRouter>
      <Header toggleCartVisibility={toggleCartVisibility} cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop/catalog"
          element={
            <Shop
              productList={productList}
              setCart={setCart}
              currentCart={cart}
            />
          }
        >
          <Route path=":productCategory" element={<ProductCategory />}>
            <Route path=":productId" element={<ProductDetail />} />
          </Route>
        </Route>
      </Routes>

      <CartSideBar
        isActive={sideBarActive}
        toggleCartVisibility={toggleCartVisibility}
        cart={cart}
        setCart={setCart}
      />
    </HashRouter>
  );
}

export default App;
