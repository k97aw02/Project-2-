const jwt = require('jsonwebtoken');


// authorization is checking to see if you are authorized to a specific part of the website 
module.exports = () => {
    return (req, res, next) => {
        console.log('authorizaton working');
        next(); 
    }
}