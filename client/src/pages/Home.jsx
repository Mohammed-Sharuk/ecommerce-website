import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Model from "../assets/fashion-model.png";
import { FaExchangeAlt, FaUndoAlt, FaHeadset } from "react-icons/fa";

const API_URL = import.meta.env.VITE_BACKEND_URL || 'https://ecommerce-website-mbtr.onrender.com';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`${API_URL}/api/products`);
      setProducts(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      <main className="flex flex-col md:flex-row items-center justify-center py-16 px-8 bg-gradient-to-r from-pink-100 to-white relative">
        <div className="absolute inset-0 bg-pink-50 opacity-20 rounded-lg -z-10"></div>
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-gray-500 uppercase tracking-widest">Our Bestsellers</p>
          <h1 className="text-5xl font-bold my-4">Latest Arrivals</h1>
          <button className="text-lg font-medium hover:underline" onClick={() => window.location.href = "/products"}>
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 relative">
          <img src={Model} alt="Fashion Model" width="600" height="800" className="rounded-lg shadow-lg" loading="lazy" />
        </div>
      </main>

      <section className="py-12 px-8">
        <h2 className="text-3xl font-bold mb-6 text-center">LATEST COLLECTIONS</h2>
        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : error ? (
          <div className="text-center">
            <p className="text-red-500">{error}</p>
            <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={fetchProducts}>
              Retry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
