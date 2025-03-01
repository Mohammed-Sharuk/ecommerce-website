// src/pages/Checkout.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    const order = {
      name: "Boy Round Neck Pure Cotton T-shirt",
      price: 60,
      quantity: 1,
      size: "M",
      date: new Date().toDateString(),
      payment: paymentMethod.toUpperCase(),
      image: "/path/to/image.jpg", // Replace with actual image path
    };

    // Redirect to Order page with order data
    navigate('/orders', { state: { orders: [order] } });
  };

  return (
    <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Delivery Information */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">DELIVERY <span className="font-bold">INFORMATION</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="First name" className="border p-2 rounded" />
          <input type="text" placeholder="Last name" className="border p-2 rounded" />
        </div>
        <input type="email" placeholder="Email address" className="border p-2 rounded w-full mt-4" />
        <input type="text" placeholder="Street" className="border p-2 rounded w-full mt-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input type="text" placeholder="City" className="border p-2 rounded" />
          <input type="text" placeholder="State" className="border p-2 rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input type="text" placeholder="Zipcode" className="border p-2 rounded" />
          <input type="text" placeholder="Country" className="border p-2 rounded" />
        </div>
        <input type="text" placeholder="Phone" className="border p-2 rounded w-full mt-4" />
      </div>

      {/* Cart Totals and Payment Method */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">CART <span className="font-bold">TOTALS</span></h2>
        <div className="border-b py-2 flex justify-between">
          <span>Subtotal</span>
          <span>$74.00</span>
        </div>
        <div className="border-b py-2 flex justify-between">
          <span>Shipping Fee</span>
          <span>$10.00</span>
        </div>
        <div className="py-2 flex justify-between font-bold">
          <span>Total</span>
          <span>$84.00</span>
        </div>

        {/* Payment Method */}
        <h3 className="text-xl font-semibold mt-6 mb-2">PAYMENT <span className="font-bold">METHOD</span></h3>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 border p-2 rounded cursor-pointer">
            <input type="radio" name="payment" value="stripe" onChange={() => setPaymentMethod('stripe')} />
            <img src="/stripe.png" alt="Stripe" className="h-5" />
          </label>

          <label className="flex items-center gap-2 border p-2 rounded cursor-pointer">
            <input type="radio" name="payment" value="razorpay" onChange={() => setPaymentMethod('razorpay')} />
            <img src="/razorpay.png" alt="Razorpay" className="h-5" />
          </label>

          <label className="flex items-center gap-2 border p-2 rounded cursor-pointer bg-green-100">
            <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
            <span className="text-green-600 font-semibold">CASH ON DELIVERY</span>
          </label>
        </div>

        {/* Place Order Button */}
        <button onClick={handlePlaceOrder} className="w-full bg-black text-white py-3 mt-6 rounded hover:bg-gray-800 transition">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default Checkout;
