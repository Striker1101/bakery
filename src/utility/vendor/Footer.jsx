import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer>
      <div>
        <img src={Logo} alt="logo" width={100} height={100} />
        <div>
          <ul>
            <h4>West Asheville </h4>
            <li> 295 Haywood Road Asheville, NC 28806</li>
            <li>Wednesday 8am-2pm</li>
            <li>Thursday 8am-2pm</li>
            <li>Friday 8am-2pm</li>
            <li> Saturday 8am-2pm</li>
            <li>Sunday 8am-2pm</li>
            <a href="#">View West Asheville Menu</a>
          </ul>
        </div>
        <div>
          <ul>
            <h4> North Asheville 197 Charlotte St Asheville, NC 28801</h4>
            <li>Tuesday 8am-2pm </li>
            <li> Wednesday 8am-2pm</li>
            <li> Thursday 8am-2pm </li>
            <li> Friday 8am-2pm </li>
            <li> Saturday 8am-2pm </li>
            <li> Sunday 8am-2pm</li>
            <a href="#">View North Asheville Menu</a>
          </ul>
        </div>
      </div>
      <a className="copyright" href="#">
        2020 © Owl Bakery // Made by Garnet
      </a>
    </footer>
  );
}
