import React, { useEffect, useState } from "react";
import "./Loader.scss";

export default function Loader() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    if (!animationPlayed) {
      playLoaderAnimation();
    } else {
      handlePageLoad();
    }
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, [animationPlayed]);

  const playLoaderAnimation = () => {
    setTimeout(() => {
      setAnimationPlayed(true);
    }, 3000);
  };

  const handlePageLoad = () => {
    setPageLoaded(true);
  };

  return (
    <div className={`loader-container ${pageLoaded ? "loader-hidden" : ""}`}>
      <div className="loader">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square last"></div>
        <div className="square clear"></div>
        <div className="square"></div>
        <div className="square last"></div>
        <div className="square clear"></div>
        <div className="square "></div>
        <div className="square last"></div>
      </div>
    </div>
  );
}
