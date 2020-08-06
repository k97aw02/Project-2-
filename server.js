// require express 
const express = require('express');
// set up routes for the server 
const routes = require('./controllers');
// instance of express 
const app = express();
// require morgan for testing purposes
const morgan = require('morgan');
//require middleware
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
// lets you pass a secret string
const cookieParser = require('cookie-parser');
// authentication 
const passport = require('passport');
 
const registration = require('./public/assets/js/registration');



// short circuit PORT 
const PORT = process.env.PORT || 3306;
// require the models for the starting 
let db = require('./models');

// use morgan 
app.use(morgan('dev'));

//use cookie parser
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.set('view engine', 'ejs');
app.use(session({
    secret: 'oooASecret',
    resave:true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


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