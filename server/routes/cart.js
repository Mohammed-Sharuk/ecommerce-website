const express = require('express');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// ✅ Get User Cart (Only for Logged-in Users)
router.get('/', authMiddleware, async (req, res) => {
    try {
        console.log("User ID:", req.user.userId); // Debugging log

        const cart = await Cart.findOne({ userId: req.user.userId }).populate('items.productId');
        if (!cart) {
            return res.status(200).json({ message: "Cart is empty", items: [] });
        }
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ Add to Cart (User Must Be Logged In)
router.post('/add', authMiddleware, async (req, res) => {
    console.log("Decoded User ID:", req.user.userId); // Debugging log

    const { productId, quantity } = req.body;

    try {
        const userId = req.user.userId;
        if (!userId) return res.status(401).json({ message: "User not recognized" });

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, items: [] });
        }

        const existingItem = cart.items.find(item => item.productId.toString() === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({ productId, quantity });
        }

        await cart.save();
        res.json({ message: "Item added to cart", cart });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ Remove Item from Cart
router.delete('/remove/:productId', authMiddleware, async (req, res) => {
    try {
        const userId = req.user.userId;
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        cart.items = cart.items.filter(item => item.productId.toString() !== req.params.productId);
        await cart.save();

        res.json({ message: "Item removed from cart", cart });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ Clear Cart
router.delete('/clear', authMiddleware, async (req, res) => {
    try {
        const userId = req.user.userId;
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        cart.items = [];
        await cart.save();

        res.json({ message: "Cart cleared successfully", cart });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
