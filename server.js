// require express 
const express = require('express');
// set up routes for the server 
const routes = require('./controllers');
// instance of express 
const app = express();
// require morgan for testing purposes
const morgan = require('morgan'); 


// short circuit PORT 
const PORT = process.env.PORT || 3001;
// require the models for the starting 
let db = require('./models');

// use morgan 
app.use(morgan('dev'));

// Define middleware here
// for form data 
app.use(express.urlencoded({ extended: true }));
// for fancy JSON 
app.use(express.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public'));
// }; 

// Add routes, both API and view
app.use(routes);

// Start the API server
// ADD SEQUELIZE HERE TO CONNECT TO YOUR DB
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server now listening on PORT ${PORT}!`);
  });
});