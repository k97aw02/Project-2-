// require express 
const express = require('express');
// set up routes for the server 
const routes = require('./controllers');
// instance of express 
const app = express();
// require morgan for testing purposes
const morgan = require('morgan');
// using a web token 
const jwt = require('jsonwebtoken');
const authorize = require('./config/middleware/authorization');

// short circuit PORT 
const PORT = process.env.PORT || 3001;
// require the models for the starting 
let db = require('./models');

// use morgan 
app.use(morgan('dev'));


// request token 
app.get('/token', authorize(), (req, res) => {
    // payload is the message being sent 
    const payload = {
        name: 'erik',
        scopes: ['customer:create']
    };
    const token = jwt.sign(payload, 'my secret key erik');

    // // a way to do it with expiration 
    // jwt.sign({
    //     exp: Math.floor(Date.now() / 1000) + (60 * 60),
    //     data: payload
    //   }, 'secret');

    res.send(token); 
});

// Define middleware here
// for form data 
app.use(express.urlencoded({ extended: true }));
// for fancy JSON 
app.use(express.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === 'production') {
app.use(express.static('public'));
// }; 

// Add routes, both API and html
app.use(routes);

// app.use

// Start the API server
// ADD SEQUELIZE HERE TO CONNECT TO YOUR DB
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server now listening on PORT ${PORT}!`);
    });
});