const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const productsRoute = require('./routes/products');
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors()); 

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://Sharuk:Sharuk123@ecommercecluster.ntpje.mongodb.net/?retryWrites=true&w=majority&appName=EcommerceCluster')
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/products', productsRoute);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);

app.get('/', (req, res) => {
    res.send('E-commerce API is running');
});

// Global Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
