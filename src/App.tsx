import React from "react";
import Navbar from "./components/navbar";
import SliderNav from "./components/slidernav";

/* Views */
import Home from "./views/home";

function App() {
  return (
    <div className="app">
      <Navbar />
      <SliderNav />
      <div className="section">
        <Home />
      </div>
    </div>
  );
}

export default App;
