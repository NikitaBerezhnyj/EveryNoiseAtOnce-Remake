import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="title">
          <a href="#" title="Every Noise at Once">
            <span>Every Noise at Once</span>
            <img src="/img/icon.png" alt="Logo" />{" "}
          </a>
        </div>
      </div>
    </header>
  );
}
