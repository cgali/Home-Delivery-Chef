var express = require('express');
var router = express.Router();

/* GET Chefs page. */
router.get('/', function(req, res) {
  res.render('chefs');
});

module.exports = router;