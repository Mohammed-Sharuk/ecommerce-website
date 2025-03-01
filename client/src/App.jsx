// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ProductDetails from "./pages/ProductDetails"; // ✅ Import Product Details
import Checkout from "./pages/Checkout"; // ✅ Import Checkout Page
import Order from "./pages/Order"; // ✅ Import Order Page
import ForgotPassword from "./pages/ForgotPassword"; // ✅ Import Forgot Password Page
import { CartProvider } from "./context/CartContext"; // ✅ Import Cart Context

const App = () => {
  return (
    <CartProvider> {/* ✅ Wrap with CartProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:id" element={<ProductDetails />} /> {/* ✅ Product Details Route */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> {/* ✅ Checkout Route */}
          <Route path="/orders" element={<Order />} /> {/* ✅ Order Route */}
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> {/* ✅ Forgot Password Route */}
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
