const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    size: [String],
    color: String,
    image: String,
    stock: Number,
    rating: Number,
});

module.exports = mongoose.model('Product', ProductSchema);
