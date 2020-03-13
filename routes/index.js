const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Home Delivery Chef' });
});

/* GET Login page. */
router.get('/login', (req, res) => {
	res.render('auth/login');
});

/* GET Signup page. */
router.get('/signup', (req, res) => {
	res.render('auth/signup');
});

module.exports = router;
