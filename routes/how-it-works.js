const express = require('express');

const router = express.Router();

/* GET How it works page */
router.get('/', (req, res) => {
    const { currentUser } = req.session;
	res.render('how-it-works', { currentUser });
});

module.exports = router;