const jwt = require("jsonwebtoken");

const JWT_SECRET = "ilove100xdev";

// Middleware for authenticating ADMINS
function adminMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Token missing!" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        // Attach adminId to request object
        req.adminId = decoded.id;

        next();
    } catch {
        return res.status(401).json({ message: "Invalid or expired token!" });
    }
}

module.exports = adminMiddleware;
