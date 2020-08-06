const LocalStrategy = require('passport-local').Strategy;

const db = require('../../models');
const passport = require('passport');
const mysql = require('mysql');
const bcrypt = require('bcrypt-node');
const { K } = require('handlebars');

module.exports = function(passport) {
	passport.serializeUser(function (id, done) {
		done(null, user.id);
	})
};

passport.deserializeUser(function(id,done) {
	connection.query('SELECT * FROM account WHERE id = ?', [id], function(err, rows) {
		done(err, rows[0]);
	});
});

passport.use(
	'local-signup',
	new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, username, password, done){
		connection.query('SELECT * FROM account WHERE username =?,', [username], function(err, rows) {
			if(err) 
			return done(err);
			if(rows.length){
				return done(null, false, req.flash( 'signUpMessage', 'That is already taken'));
			}else{
				const newUserMySql = {
					username: username,
					password: bcrypt.hashSync(password, null, null)
				};

				const insertQuery = "INSERT INTO accounts (username, password) VALUES (?,?)";

				connection.query(insertQuery, [newUserMySql.username, newUserMySql.password], function(err, rows){
					newUserMySql.id = rows.insertId;
					return done(null, newUserMySql);
				});
			}
		});
	})
);


