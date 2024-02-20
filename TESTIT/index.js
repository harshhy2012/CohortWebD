/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

const jwt = require('jsonwebtoken');
const z = require("zod");
const jwtPassword = 'secret';

const emailSchema = z.string().email();
const passwordSchema = z.string().min(6);


// /**
//  * Generates a JWT for a given username and password.
//  *
//  * @param {string} username - The username to be included in the JWT payload.
//  *                            Must be a valid email address.
//  * @param {string} password - The password to be included in the JWT payload.
//  *                            Should meet the defined length requirement (e.g., 6 characters).
//  * @returns {string|null} A JWT string if the username and password are valid.
//  *                        Returns null if the username is not a valid email or
//  *                        the password does not meet the length requirement.
//  */

const username = "harshityadav46@gmail.com", password = "12345678"
function signJwt(username, password) {
    // Your code here
    const correctEmail = emailSchema.safeParse(username).success;
    const correctPassword = passwordSchema.safeParse(password).success;
    console.log(correctEmail, correctPassword)
    if(correctEmail && correctPassword){
        const sign = jwt.sign({username}, jwtPassword);
        console.log("ban gya token: " + sign);
        return sign;
    } else{
        return null;
    }
    
}
const sahiToken = signJwt(username, password);
/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    // Your code here
    try{
        const verified = jwt.verify(token, jwtPassword);
        return true;
    } catch(e){
        return false;
    }
}

const isVerified = verifyJwt(sahiToken);

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */

const galatToken = "sdfasdfgasdjklghlasdghajkl;s";

function decodeJwt(token) {
    // Your code here
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    } else{
        return false;
    }
}

const decodeSahiToken = decodeJwt(sahiToken);
const decodeGalatToken = decodeJwt(galatToken);

console.log("Sahi token decoded: \n" + decodeSahiToken);
console.log("Galat token decoded: \n" + decodeGalatToken);

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};

