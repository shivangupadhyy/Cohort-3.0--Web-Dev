function userMiddleware(req, res, next) {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).json({ message: "Token missing!" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        if (decoded.id) {
            req.userId = decoded.id;  // store MongoDB _id
            next();
        } else {
            return res.status(401).json({ message: "Invalid token payload!" });
        }
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token!" });
    }
}
