import React from "react";
import "./styleSheet/homepage.css";
import ImageSlider from "../components/ImageSlider";
import { Container } from "react-bootstrap";
export default function Homepage() {
  function handleClick() {}

  return (
    <div>
      <div id="slider">
        <p>
          Naturally leavened breads and European-inspired pastries made by hand
          in West Asheville, NC
        </p>
        <ImageSlider />
        <Container>
          <div className="flex" style={{ display: "flex", margin: "20px 0" }}>
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

              <button className="btn_link">West Asheville Menu</button>
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

              <button className="btn_link"> North Asheville Menu</button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
