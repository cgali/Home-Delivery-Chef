const express = require('express');
const router = express.Router();

/* GET /chefs page. */
router.get('/', (req, res) => {
  res.render('chefs');
});

/* GET /chefs/:id page. */
router.get('/:id', (req, res) => {
  res.render('chefs/');
});

module.exports = router;