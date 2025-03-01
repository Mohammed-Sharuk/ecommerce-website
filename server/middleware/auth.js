const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: "Please login first" });

    try {
        // Handle token with or without "Bearer " prefix
        token = token.startsWith("Bearer ") ? token.slice(7) : token;

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach userId to request object
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token, please login again" });
    }
};
