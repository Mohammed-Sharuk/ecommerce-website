import axios from 'axios';

// Use the deployed backend URL
const API_URL = import.meta.env.VITE_BACKEND_URL || 'https://ecommerce-website-mbtr.onrender.com/api/products';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error.response?.data || error.message);
    return [];
  }
};
