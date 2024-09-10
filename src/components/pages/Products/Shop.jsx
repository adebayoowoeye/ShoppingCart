import { useEffect, useState } from "react";
import Spinner from "../../../utilities/Spinner";

const API_URL = "https://dummyjson.com/products";

function Shop() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProducts(API_URL);
  }, []);
  async function getProducts(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.products);
      setIsLoading(false);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
      setError(true);
      setIsLoading(false);
    }
  }

  if (error) {
    return (
      <h3>
        {" "}
        There was an error while fetching this product... Please try again{" "}
      </h3>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mt-36 md:mt-28 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div key={product.id} className="p-4 border-2 border-gray-200">
          <img
            className="w-full h-64 object-cover"
            src={product.thumbnail}
            alt={product.title}
          />
          <h3 className="text-xl font-bold">{product.title}</h3>
          <div className="flex justify-between justify-items-center">
            <p className="text-gray-600 text-right">${product.price}</p>
            <button className="py-1 px-2 border border-gray-200 bg-red-500 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;
