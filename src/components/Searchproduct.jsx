import React from "react";

function Searchproduct() {
  return (
    <div className="flex flex-wrap items-center justify-center text-base md:ml-auto">
      <label htmlFor="search" className="hidden py-1 px-3"></label>
      <input
        type="search"
        name="search"
        placeholder="search products"
        className="text-md py-1 px-1 sm:px-2 bg-gray-300 border-2 focus:border-red-500"
      />
      <button
        type="submit"
        className="bg-red-500 hover:bg-red-800 py-1 px-1 sm:px-5 text-lg text-white ease-in-out"
      >
        Search
      </button>
    </div>
  );
}

export default Searchproduct;
