import React from "react";
import Loader from "./Components/Loader/Loader.jsx";
import Header from "./Components/Header/Header";
import ToTopButton from "./Components/ToTopButton/ToTopButton";
import AnimatedBackground from "./Components/AnimatedBackground/AnimatedBackground";
import MainSection from "./Components/MainSection/MainSection";
import Footer from "./Components/Footer/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Loader />
      <Header />
      <AnimatedBackground />
      <MainSection />
      <ToTopButton />
      <Footer />
    </div>
  );
}

export default App;
