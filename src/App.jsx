import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { FaFacebook } from "react-icons/fa";
function App() {
  return (
    <Router>
     <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
   
  );
}

export default App;
