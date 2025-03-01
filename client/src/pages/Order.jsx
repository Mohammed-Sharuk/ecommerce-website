// src/pages/Order.jsx

import React from "react";
import { useLocation } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  const orders = location.state?.orders || []; // Get orders from state

  return (
    <div className="max-w-5xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6">MY ORDERS</h1>
      {orders.map((order, index) => (
        <div key={index} className="border p-4 mb-4 rounded-lg shadow-sm">
          <div className="flex gap-4">
            <img src={order.image} alt={order.name} className="w-24 h-24 object-cover" />
            <div>
              <h2 className="text-lg font-semibold">{order.name}</h2>
              <p>${order.price} &nbsp; Quantity: {order.quantity} &nbsp; Size: {order.size}</p>
              <p>Date: {order.date}</p>
              <p>Payment: {order.payment}</p>
            </div>
            <div className="ml-auto flex flex-col justify-between">
              <p className="text-green-600 font-medium">● Order Placed</p>
              <button className="border px-3 py-1 rounded hover:bg-gray-100">Track Order</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Order;
