import React from "react";
import "./App.css";
import Navbar from "./Component1/Navbar/Navbar.jsx";
import Offers from "./Component1/Offers/Offers";
import Home from "./Component1/Home/Home";
import Popular from "./Component1/Popular/Popular";
import Footer from "./Component1/Footer/Footer";
import Blog from "./Component1/Blog/Blog";
import About from "./Component1/About/About";
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Offers />
      <About />
      <Footer />
    </>
  );
};

export default App;
