const jwt = require("jsonwebtoken");
const JWT_SCECRET = "ilove100xdevs";

function adminMiddleware(req, res, next){
    const token = req.headers.authorization;

    try{
        const decode = jwt.verify(token, JWT_SCECRET);

        req.adminId = decode.id;
        next();
    }catch(error){
        return res.status(403).json({
            message: "You have not Signed Up!"
        })
    }
}

module.exports = {
    adminMiddleware,
}