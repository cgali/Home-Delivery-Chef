const express = require('express');
const bcrypt  = require('bcrypt');
const Chef    = require('../models/chef');
const Client  = require('../models/client');

const router = express.Router();
const saltRounds = 10;

// GET home page
router.get('/', (req, res) => {
	const { currentChef, currentClient } = req.session;
	res.render('index', { title: 'Home Delivery Chef', currentChef, currentClient });
	// console.log(req.session.currentUser);
});

// GET Login page
router.get('/login', (req, res) => {
	const { currentChef, currentClient } = req.session;
	res.render('auth/login', { currentChef, currentClient });
});

// POST Login page for Chefs
router.post('/login', (req, res, next) => {
	const { email, password } = req.body;
	if (email === '' || password === '') {
		res.render('auth/login', { error: 'Fields cannot be empty' });
	} else {
		Chef.findOne({ email })
			.then(user => {
				if (!user) {
					res.render('auth/login', { error: 'You are not registered, please Sign Up first' });
				} else {
					const userId = user._id;
					console.log(bcrypt.compareSync(password, user.hashedPassword));
					if (bcrypt.compareSync(password, user.hashedPassword)) {
						req.session.currentChef = user;
						res.redirect('/chefs/' + userId);
					} else {
						res.render('auth/login', { error: 'Incorrect Email or Password' });
					}
				}
			})
			.catch(error => {
				next(error);
			});
	}
});

// POST Login page for Clients
router.post('/login-client', (req, res, next) => {
	const { email, password } = req.body;
	if (email === '' || password === '') {
		res.render('auth/login', { error: 'Fields cannot be empty' });
	} else {
		Client.findOne({ email })
			.then(user => {
				if (!user) {
					res.render('auth/login', { error: 'You are not registered, please Sign Up first' });
				} else {
					console.log(bcrypt.compareSync(password, user.hashedPassword));
					if (bcrypt.compareSync(password, user.hashedPassword)) {
						req.session.currentClient = user;
						res.redirect('/menus');
					} else {
						res.render('auth/login', { error: 'Incorrect Email or Password' });
					}
				}
			})
			.catch(error => {
				next(error);
			});
	}
});

// GET Signup page
router.get('/signup', (req, res) => {
	const { currentChef, currentClient } = req.session;
	res.render('auth/signup', { currentChef, currentClient });
});

// POST Signup page for Chefs
router.post('/signup', (req, res, next) => {
	const { email, password, name, image, surname, yearsOfExperience, languages } = req.body;
	if (email === '' || password === '' || name === '' || surname === '' || yearsOfExperience === '' || languages === '') {
		res.render('auth/signup', { error: 'Fields cannot be empty' });
	} else {
	Chef.findOne({ email })
		.then(user => {
			if (user) {
				res.render('auth/signup', { error: 'This email is already registered in our database, please Log In' });
			} else {
				const userId = user._id;
				const salt = bcrypt.genSaltSync(saltRounds);
				const hashedPassword = bcrypt.hashSync(password, salt);
				Chef.create({
					email,
					hashedPassword,
					image,
					name,
					surname,
					yearsOfExperience,
					languages,
				})
					.then(userCreated => {
						req.session.currentChef = userCreated;
						res.redirect('/chefs/' + userId);
					})
					.catch(error => {
						console.log('error', error);
						next(error);
					});
			}
		})
		.catch(error => {
			next(error);
		});
	}
});

// POST Signup page for Clients
router.post('/signup-client', (req, res, next) => {
	const { email, password } = req.body;
	if (email === '' || password === '') {
		res.render('auth/signup', { error: 'Fields cannot be empty' });
	} else {
		Client.findOne({ email })
		.then(user => {
			if (user) {
				res.render('auth/signup', { error: 'This email is already registered in our database, please Log In' });
			} else {
				const salt = bcrypt.genSaltSync(saltRounds);
				const hashedPassword = bcrypt.hashSync(password, salt);
				Client.create({
					email,
					hashedPassword,
				})
					.then(userCreated => {
						req.session.currentClient = userCreated;
						res.redirect('/menus');
					})
					.catch(error => {
						console.log('error', error);
						next(error);
					});
			}
		})
		.catch(error => {
			next(error);
		});
	}
});

// GET Logout
router.get('/logout', (req, res, next) => {
	req.session.destroy(err => {
		if (err) {
			next(err);
		}
		res.redirect('/login');
	});
});

module.exports = router;
