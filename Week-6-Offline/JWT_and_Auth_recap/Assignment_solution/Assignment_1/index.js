/**
 * Assignment #1 - Write a function that takes in a username and password and returns
 * a JWT token with the username encoded. Should return null if the username is
 * not a valid email or if the password is less than 6 characters. Try using the zod library here
 */

const jwt = require("jsonwebtoken");
const zod = require("zod");

const jwtPassword = "secret";

//define the schema for the email and password
const emailSchema  = zod.string().email();
const passwordSchema = zod.string().min(6);


function signJwt(username, password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);


    //if the email and password are not valid then return null
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }

    const signature = jwt.sign({
        username,
    }, jwtPassword);

    return signature;
}

const ans = signJwt("bharat@gmail.com", "bhjwbd3243");

console.log(ans)


