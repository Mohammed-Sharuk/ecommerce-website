import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Model from "../assets/fashion-model.png";
import { FaExchangeAlt, FaUndoAlt, FaHeadset } from "react-icons/fa";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("http://localhost:5000/api/products");
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
      {/* Main Section */}
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
          <div className="absolute top-0 left-0 w-32 h-32 bg-pink-300 rounded-full opacity-30 transform -translate-x-8 -translate-y-8"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-200 rounded-full opacity-30 transform translate-x-8 translate-y-8"></div>
        </div>
      </main>

      {/* LATEST COLLECTIONS Section */}
      <section className="py-12 px-8">
        <h2 className="text-3xl font-bold mb-6 text-center">LATEST COLLECTIONS</h2>
        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : error ? (
          <div className="text-center">
            <p className="text-red-500">{error}</p>
            <button
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={fetchProducts}
            >
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

      {/* Service Highlights Section */}
      <section className="py-12 px-8 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <FaExchangeAlt className="text-4xl text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Easy Exchange Policy</h3>
            <p className="text-gray-600">We offer hassle-free exchange policy</p>
          </div>
          <div>
            <FaUndoAlt className="text-4xl text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">7 Days Return Policy</h3>
            <p className="text-gray-600">We provide 7 days free return policy</p>
          </div>
          <div>
            <FaHeadset className="text-4xl text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Best Customer Support</h3>
            <p className="text-gray-600">We provide 24/7 customer support</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold">FOREVER<span className="text-pink-500">.</span></h3>
            <p className="text-gray-400 mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">COMPANY</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
