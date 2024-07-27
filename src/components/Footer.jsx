import React from "react";

function Footer() {
  return (
    <footer className="bg-red-400 w-full border-t-2  h-[5rem] fixed bottom-0 left-0 py-5 mb-0">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <nav className="text-gray-200 flex flex-wrap justify-center items-center md:mr-auto">
          <a className="mr-3 block px-2" href="/">
            Home
          </a>
          <a className="mr-3 block px-2" href="/">
            Shop
          </a>
          <a className="mr-3  block px-2" href="/">
            Contact
          </a>
          <a className="mr-3  block px-2" href="/">
            Cart
          </a>
        </nav>
        <div>
          <p className="text-white text-sm">
            �� {new Date().getFullYear()} Shopping Cart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
