import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductCategory.css";
import { uniqueId } from "lodash";
import Product from "./Product";

function ProductCategory() {
  const { productCategory } = useParams();

  const productList = [
    {
      category: "cpus",
      productName: "Ryzen",
      cost: 300,
      id: uniqueId(),
    },
    {
      category: "cpu-coolers",
      productName: "Corsair",
      cost: 50,
      id: uniqueId(),
    },
    {
      category: "motherboards",
      productName: "Asus",
      cost: 150,
      id: uniqueId(),
    },
    {
      category: "cases",
      productName: "NZXT",
      cost: 100,
      id: uniqueId(),
    },
    {
      category: "memory",
      productName: "Munchkin",
      cost: 120,
      id: uniqueId(),
    },
    {
      category: "video-card",
      productName: "Geforce",
      cost: 700,
      id: uniqueId(),
    },
    {
      category: "power-supplies",
      productName: "Evga",
      cost: 200,
      id: uniqueId(),
    },
    {
      category: "storage",
      productName: "Samsung",
      cost: 130,
      id: uniqueId(),
    },
  ];

  return (
    <div className="product-category">
      {productList
        .filter((product) => product.category === productCategory)
        .map((filteredProduct) => (
          <Product product={filteredProduct} key={filteredProduct.id} />
        ))}
    </div>
  );
}

export default ProductCategory;
