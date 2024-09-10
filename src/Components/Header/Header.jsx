import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header id="header">
      <div className="container-fluid">
        <div className="title">
          {/* <a href="#" title="Every Noise at Once">
            <span>Every Noise at Once</span>
            <img src="/img/icon.png" alt="Logo" />{" "}
          </a> */}
          <button
            onClick={() => {
              let element = document.getElementById("header");
              const elementPosition =
                element.getBoundingClientRect().top + window.scrollY - 64;
              window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
              });
            }}
            title="Every Noise at Once"
          >
            <span>Every Noise at Once</span>
            <img src="/img/icon.png" alt="Logo" />
          </button>
        </div>
      </div>
    </header>
  );
}
