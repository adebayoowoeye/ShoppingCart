import React from "react";
import Searchproduct from "./Searchproduct";

function Navbar() {
  return (
    <header className="bg-white w-full fixed shadow-lg top-0 left-0">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center p-4">
        <a
          className="flex items-center font-bold text-red-700 text-2xl"
          href="/"
        >
          Shop Logo
        </a>

        <Searchproduct />
        <nav className="flex flex-wrap justify-center items-center md:ml-auto">
          <a className="mr-3 mt-1 block px-2 py-1" href="/">
            Home
          </a>
          <a className="mr-3 mt-1 block px-2 py-1" href="/">
            Shop
          </a>
          <a className="mr-3 mt-1 block px-2 py-1" href="/">
            Contact
          </a>
          <a className="mr-3 mt-1 block px-2 py-1" href="/">
            Cart
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
