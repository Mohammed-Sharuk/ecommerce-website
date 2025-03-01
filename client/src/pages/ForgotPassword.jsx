import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
      setMessage(res.data.message || "Reset link sent to your email.");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to send reset link.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Forgot Password</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 text-center"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
        >
          Reset Password
        </button>
        {message && <p className="text-green-600 text-sm">{message}</p>}
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <div className="flex justify-between text-sm text-gray-600">
          <Link to="/login" className="hover:underline">
            Back to Login
          </Link>
          <Link to="/create-account" className="hover:underline">
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
