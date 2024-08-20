import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import Show from "./pages/Show";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Homepage />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/about_us" element={<AboutUs />}></Route>
      <Route path="/show" element={<Show />}></Route>
    </Routes>
  );
}
