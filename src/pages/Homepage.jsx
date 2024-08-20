import React from "react";
import "./styleSheet/homepage.css";
export default function Homepage() {
  function handleClick() {}
  document.getElementById("btn").onclick = () => {};
  return (
    <div>
      <button id="btn" onClick={handleClick}>
        click me{" "}
      </button>
    </div>
  );
}
