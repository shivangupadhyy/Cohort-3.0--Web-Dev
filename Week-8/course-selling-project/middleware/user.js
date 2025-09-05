const jwt  = require("jsonwebtoken");

const  JWT_SCECRET  =  'ilove100xdevs'


function userMiddleware(req, res, next){
    const token  = req. headers.authorization;

    try{
        const decode = jwt.verify(token,JWT_SCECRET );

        req.userId = decode.indexOf;
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