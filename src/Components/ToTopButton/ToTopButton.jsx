import React, { useEffect, useRef, useState } from "react";
import "./ToTopButton.css";

export default function ToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button ref={buttonRef} className="up-btn" onClick={handleClick}>
          <span>UP</span>
        </button>
      )}
    </div>
  );
}
