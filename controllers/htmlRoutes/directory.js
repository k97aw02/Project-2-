const router = require("express").Router(); 

//require the db to pull from employee models
let db = require('../../models');


router.get('/directory', (res,req) => {
    console.log("You're in the directory page");
    let data = req.body;
    // let query = "SELECT full_name = ? FROM Employee";
    // db.query(query, [data], function(err, res) {    
    //     if(err) throw err;  
    // }
    res.ender('directory');
});

module.exports = router;