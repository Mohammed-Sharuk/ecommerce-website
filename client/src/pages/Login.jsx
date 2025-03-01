// src/pages/Login.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token); // Store JWT token
      navigate("/"); // Redirect to Home
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <h2 className="text-3xl font-semibold mb-6">Login —</h2>

      <form className="w-96" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <Link to="/forgot-password" className="hover:underline">
            Forgot your password?
          </Link>
          <Link to="/create-account" className="hover:underline">
            Create account
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Sign In
        </button>
      </form>

      {/* Footer */}
      <footer className="mt-20 w-full border-t pt-6 text-center text-sm text-gray-600">
        <div className="flex justify-around">
          <div>
            <h3 className="text-xl font-bold">
              FOREVER<span className="text-pink-500">.</span>
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">COMPANY</h4>
            <ul>
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="hover:underline">
                  Delivery
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">GET IN TOUCH</h4>
            <ul>
              <li>+1-000-000-0000</li>
              <li>greatstackdev@gmail.com</li>
              <li>
                <a href="https://instagram.com" className="hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-6">
          Copyright 2024 © greatstack.dev - All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Login;
