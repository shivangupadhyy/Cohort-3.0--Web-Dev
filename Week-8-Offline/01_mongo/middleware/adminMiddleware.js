const jwt = require('jsonwebtoken');
const JWT_SECRET = "ilove100xdev";

function adminMiddleware(req, res, next){
    const token = req.headers.token;

    try{
        const decodedvalue = jwt.verify(token, JWT_SECRET);

        if(decodedvalue.username){
            next()
        }else{
            res.status(403).json({
                message : "You are not authenticated",
            })
        }
    }catch{
        res.status(401).json({
            message : "Incorrect Inputs",
        })
    }
}

module.exports = adminMiddleware;