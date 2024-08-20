import React from "react";
import Logo from "../../assets/images/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar" style={{ marginBottom: "10px" }}>
      <div className="navbar-brand">
        <a href="/">
          <img src={Logo} alt="logo" className="logo" />
        </a>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className="navbar-collapse" id="navbarNav">
        <ul className="nav-lists" id="nav-list">
          <li className="nav-list">
            <a href="/">HomePage</a>
          </li>

          <li className="nav-list">
            <a href="/Shop">Shop</a>
          </li>

          <li className="nav-list">
            <a href="/Show">Show</a>
          </li>

          <li className="nav-list">
            <a href="/about_us">About Us</a>
          </li>

          <li className="nav-list">
            <a href="/login">Login</a>
          </li>

          <li className="nav-list">
            <a href="/register">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Function to toggle the menu on small screens
const toggleMenu = () => {
  const navbarCollapse = document.getElementById("navbarNav");
  navbarCollapse.classList.toggle("active");
};

export default NavBar;
