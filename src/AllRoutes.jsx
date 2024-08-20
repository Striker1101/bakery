import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import Show from "./pages/Show";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import FG from "./pages/auth/ForgotPassword";
import Resetpassword from "./pages/auth/Resetpassword";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Homepage />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/about_us" element={<AboutUs />}></Route>
      <Route path="/show" element={<Show />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/forgot-password" element={<FG />}></Route>
      <Route path="/reset-password" element={<Resetpassword />}></Route>
    </Routes>
  );
}
