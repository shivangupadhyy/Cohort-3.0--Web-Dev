const jwt  = require("jsonwebtoken");

const {JWT_USER_PASSWORD} = require("../config")

function userMiddleware(req, res, next){
    const token  = req. headers.token;

    try{
        const decode = jwt.verify(token,JWT_USER_PASSWORD );

        req.userId = decode.id;
        next();
    }catch (error){
        return res.status(403).json({
            Message: " You have not Signed in !",
        })
    }
}

module.exports = {
    userMiddleware,
}