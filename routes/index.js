const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
	res.render('index', { title: 'Home Delivery Chef' });
});

/* GET Login page */
router.get('/login', (req, res) => {
	res.render('auth/login');
});

/* GET Signup page */
router.get('/signup', (req, res) => {
	res.render('auth/signup');
});

/* POST Signup page */
// router.post('/signup', (req, res) => {
// 	const { email, password, name, image, surname, yearsOfExperience, languages } = req.body;
// 	if (email === '' || password === '') {
// 		res.render('auth/signup', { error: 'Los campos no pueden estar vacíos' });
// 	} else {
	
// });

module.exports = router;
