const express = require('express');
const Menus   = require('../models/menu');

const router = express.Router();

// GET /menus page.
router.get('/', (req, res) => {
    const { currentUser } = req.session;
    Menus.find()
        .then(menus => {
            console.log('listing menus');
            res.render('menus', { menus, currentUser });
        })
        .catch(err => console.log('Error while listing chefs: ', err));
});

// GET /menus/:id page.
router.get('/:id', (req, res) => {
    const { currentUser } = req.session;
    const { id } = req.params;
    Menus.findById(id)
        .then(foundMenu => {
            console.log('Rendering ONE Menu');
            res.render('chefprofile', { foundMenu, currentUser });
        })
        .catch(err => console.log('Error while listing chefs: ', err));
});

module.exports = router;