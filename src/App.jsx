import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <h1 className="text-blue-600 text-4xl mt-28">
        Shopping Cart in progress
      </h1>
    </main>
  );
}

export default App;
