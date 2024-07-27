import React from "react";
import Searchproduct from "./Searchproduct";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <header className="bg-white w-full fixed shadow-lg top-0 left-0">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center p-4">
        <NavLink
          className="flex items-center font-bold text-red-700 text-2xl"
          to="/"
        >
          Shop Logo
        </NavLink>

        <Searchproduct />
        <nav className="flex flex-wrap justify-center items-center md:ml-auto">
          <NavLink className="mr-3 mt-1 block px-2 py-1" to="/">
            Home
          </NavLink>
          <NavLink className="mr-3 mt-1 block px-2 py-1" to="/product/shop">
            Shop
          </NavLink>
          <NavLink className="mr-3 mt-1 block px-2 py-1" to="/contact">
            Contact
          </NavLink>
          <NavLink className="mr-3 mt-1 block px-2 py-1" to="/cart/cart">
            Cart
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
