const router = require("express").Router();
const path = require('path');
var db = require('../../models')

var passport = require('../../config/passport.js')




$(document).ready(function(){
    $('#logout').on('click', function(event){
        if(confirm("Are you sure you want to logout?"))
        logout();    
        //window.location.href = "/";

        else return false;
    });
})