const express = require('express');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Get User Cart
router.get('/', authMiddleware, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.userId }).populate('items.productId');
        if (!cart) return res.status(200).json({ message: "Cart is empty", items: [] });

        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// Add to Cart
router.post('/add', authMiddleware, async (req, res) => {
    const { productId, quantity } = req.body;

    try {
        const userId = req.user.userId;
        let cart = await Cart.findOne({ userId });

        if (!cart) cart = new Cart({ userId, items: [] });

        const existingItem = cart.items.find(item => item.productId.toString() === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({ productId, quantity });
        }

        await cart.save();
        res.json({ message: "Item added to cart", cart });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// Remove Item from Cart
router.delete('/remove/:productId', authMiddleware, async (req, res) => {
    try {
        const userId = req.user.userId;
        const cart = await Cart.findOne({ userId });

        if (!cart) return res.status(404).json({ message: "Cart not found" });

        cart.items = cart.items.filter(item => item.productId.toString() !== req.params.productId);
        await cart.save();

        res.json({ message: "Item removed from cart", cart });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
