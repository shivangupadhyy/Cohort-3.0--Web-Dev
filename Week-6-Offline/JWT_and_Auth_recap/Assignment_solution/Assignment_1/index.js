/**
 * Assignment #1 - Write a function that takes in a username and password and returns
 * a JWT token with the username encoded. Should return null if the username is
 * not a valid email or if the password is less than 6 characters. Try using the zod library here
 */

const jwt = require("jsonwebtoken");
const zod = require("zod");

const jwtPassword = "secret";

//define the schema for the email and password
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);

  //if the email and password are not valid then return null
  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }

  const signature = jwt.sign(
    {
      username,
    },
    jwtPassword
  );

  return signature;
}

const ans = signJwt("bharat@gmail.com", "bhjwbd3243");

function decodedJwt(token) {
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}

function verifyJwt(token){
    const verifed = jwt.verify(token, jwtPassword)
    if(verifed){
        return true
    }else{
        return false
    }

}

console.log(ans);

console.log(
  decodedJwt(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJoYXJhdEBnbWFpbC5jb20iLCJpYXQiOjE3NTU3NzY0MDN9.mqWKBMH_qunDr3Lz2eazcR8L8w7kWYYiznndrRCLt14"
  )
);

console.log(
  verifyJwt(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJoYXJhdEBnbWFpbC5jb20iLCJpYXQiOjE3NTU3NzY0MDN9.mqWKBMH_qunDr3Lz2eazcR8L8w7kWYYiznndrRCLt14"
  )
);
