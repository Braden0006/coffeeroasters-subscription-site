import React from "react";

import Navbar from './Components/Navbar/Navbar';
import Homepage from "./Components/Homepage/Homepage";

import "./App.css";

function App() {
  return (
    <section className="app-home">
      <Navbar />
      <Homepage />
    </section>
  );
}

export default App;
