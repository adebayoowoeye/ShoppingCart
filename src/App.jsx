import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet, Routes, Route } from "react-router-dom";
import Contact from "./components/pages/Contact";
import HomePage from "./components/pages/HomePage";
import Shop from "./components/pages/Products/Shop";
import Cart from "./components/pages/Cart/Cart";

function App() {
  return (
    <main className="container ms-auto relative min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/shop" element={<Shop />} />
        <Route path="cart/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
