import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />{" "}
        </Routes>
      </Router>
    </>
  );
}

export default App;
