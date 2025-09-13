const jwt = require("jsonwebtoken");

const JWT_SECRET = "ilove100xdev";

// Middleware for authenticating USERS
function userMiddleware(req, res, next) {
    // Extract token from "Authorization: Bearer <token>"
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Token missing!" });
    }

    try {
        // Verify token using secret
        const decoded = jwt.verify(token, JWT_SECRET);

        // Attach userId to request object for later use
        req.userId = decoded.id;

        next(); // proceed to actual route handler
    } catch {
        return res.status(401).json({ message: "Invalid or expired token!" });
    }
}

module.exports = userMiddleware;
