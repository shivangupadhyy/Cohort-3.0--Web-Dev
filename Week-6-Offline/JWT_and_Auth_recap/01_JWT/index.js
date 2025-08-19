const jwt = require('jsonwebtoken');
const JWT_SECRECT = "ilove100xdev"
const user = {
    name : "Shivang",
    paswword :123134224
}

const token = jwt.sign(user, JWT_SECRECT)
console.log(token);

const verifiedToken = jwt.verify(token, JWT_SECRECT)
console.log(verifiedToken)

const decodedValue = jwt.decode(token);
console.log(decodedValue)
