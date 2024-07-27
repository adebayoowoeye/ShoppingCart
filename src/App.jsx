import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <h1 className="text-blue-600 text-4xl mt-28">
        Shopping Cart in progress
      </h1>
      <Footer />
    </main>
  );
}

export default App;
