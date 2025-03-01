import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const shippingFee = 10.0;

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + shippingFee;

  // Handle quantity change
  const handleQuantityChange = (item, delta) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity > 0) {
      updateQuantity(item._id, item.selectedSize, newQuantity); // FIXED: Changed `id` to `_id`
    } else {
      removeFromCart(item._id, item.selectedSize); // FIXED: Changed `id` to `_id`
    }
  };

  return (
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-3xl font-semibold mb-6 border-b-2 border-gray-300 w-fit">
        YOUR <span className="font-bold">CART</span> —
      </h1>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={`${item._id}-${item.selectedSize}`} // FIXED: Changed `id` to `_id`
                className="flex items-center justify-between border-b py-4"
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    Size: {item.selectedSize || "N/A"}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => handleQuantityChange(item, -1)}
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item, 1)}
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item._id, item.selectedSize)} // FIXED: Changed `id` to `_id`
                    className="text-red-500 text-sm mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Totals */}
        <div className="w-full lg:w-1/3 border p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-300 w-fit">
            CART <span className="font-bold">TOTALS</span> —
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Shipping Fee</span>
              <span>${shippingFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              className="block w-full bg-black text-white text-center py-2 rounded-md hover:bg-gray-800 transition duration-300"
            >
              PROCEED TO CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
