import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Cards from "../components/Cards";
import Carts from "../components/Carts";
import "./styleSheet/shop.css";
export default function Shop() {
  const datas = [
    {
      name: "Chocolate Cake",
      image: "https://via.placeholder.com/100",
      category: "Cakes",
      price: 15.99,
    },
    {
      name: "Croissant",
      image: "https://via.placeholder.com/100",
      category: "Pastries",
      price: 2.49,
    },
  ];

  const [carts, setCarts] = useState([]);

  function handleAddCart(index) {
    const product = datas[index];
    if (product) {
      carts.push(product);
      setCarts(carts);
    }
  }
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <div id="cards">
          <Cards datas={datas} handleAddCart={handleAddCart} />
        </div>
        <div id="cart">
          <Carts datas={carts} />
        </div>
      </div>
    </Container>
  );
}
