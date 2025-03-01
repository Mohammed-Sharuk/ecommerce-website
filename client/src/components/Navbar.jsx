import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import searchIcon from "../assets/search-icon.png";
import UserIcon from "../assets/user-icon.png";
import BagIcon from "../assets/bag-icon.png";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white fixed top-0 left-0 right-0 z-20 shadow-lg">
      {/* Logo */}
      <div className="text-4xl font-extrabold tracking-wider">
        <Link to="/" className="flex items-center">
          FOREVER<span className="text-pink-500">.</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8 text-lg font-medium">
        <Link to="/" className="hover:text-pink-500 transition">HOME</Link>
        <Link to="/collection" className="hover:text-pink-500 transition">COLLECTION</Link>
        <Link to="/about" className="hover:text-pink-500 transition">ABOUT</Link>
        <Link to="/contact" className="hover:text-pink-500 transition">CONTACT</Link>
      </nav>

      {/* Icons Section */}
      <div className="flex space-x-6 items-center">
        <button onClick={() => setShowSearch(true)} className="hover:text-pink-500">
          <img src={searchIcon} alt="Search" className="w-6 h-6" />
        </button>

        {isLoggedIn ? (
          <button onClick={handleLogout} className="hover:text-pink-500">Logout</button>
        ) : (
          <button onClick={() => navigate("/login")} className="hover:text-pink-500">
            <img src={UserIcon} alt="User" className="w-6 h-6" />
          </button>
        )}

        <Link to="/cart" className="relative hover:text-pink-500">
          <img src={BagIcon} alt="Cart" className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      {showSearch && <SearchBar onClose={() => setShowSearch(false)} />}
    </header>
  );
};

export default Navbar;
