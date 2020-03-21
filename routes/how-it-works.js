const express = require('express');

const router = express.Router();

// GET How it works page 
router.get('/', (req, res) => {
    const { currentChef, currentClient } = req.session;
	res.render('how-it-works', { currentChef, currentClient });
});

module.exports = router;