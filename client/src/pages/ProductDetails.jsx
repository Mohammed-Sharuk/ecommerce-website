// src/pages/ProductDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// Use the deployed backend URL
const API_URL = import.meta.env.VITE_BACKEND_URL || 'https://ecommerce-website-mbtr.onrender.com';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("⚠️ Please login to add items to your cart.");
      navigate("/login");
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/api/cart`,
        { productId: product._id, quantity: 1 },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("✅ Product added to cart!");
      } else {
        alert("⚠️ Failed to add item to cart.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("❌ Error adding to cart.");
    }
  };

  if (!product) {
    return <div className="text-center mt-20">Loading product details...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 rounded-lg" />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-4">${product.price}</p>

          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
