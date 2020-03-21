const express = require('express');
const Menus = require('../models/menu');

const router = express.Router();

// GET /menus page.
router.get('/', (req, res) => {
    const { currentChef, currentClient } = req.session;
    Menus.find()
        .then(menus => {
            console.log('listing menus');
            res.render('menus', { menus, currentChef, currentClient });
        })
        .catch(err => console.log('Error while listing chefs: ', err));
});

// GET /menus/:id page.
router.get('/:id', (req, res) => {
    const { currentChef, currentClient } = req.session;
    const { id } = req.params;
    Menus.findById(id)
        .then(foundMenu => {
            console.log('Rendering ONE Menu');
            res.render('menu-info', { foundMenu, currentChef, currentClient });
        })
        .catch(err => console.log('Error while listing chefs: ', err));
});

// // GET /menus/:id/update
// router.get('/:id/updatechef', (req, res, next) => {
//     const { id } = req.params;
//     Chefs.findById(id)
//         .then(chefInfo => {
//             res.render('updatechef', { chefInfo })
//         })
//         .catch(next);
// })

// // POST /chefs/:id/update
// router.post('/:id/', (req, res) => {
//     const { id } = req.params;
//     console.log('THIS IS THE ID: ', id)
//     const { name, surname, image, yearsOfExperience, languages, email } = req.body;
//     console.log(req.query)
//     Chefs.findByIdAndUpdate(id, {
//         name,
//         surname,
//         image,
//         yearsOfExperience,
//         languages,
//         email,
//     })
//         .then(() => {
//             res.redirect(`/chefs/${id}`);
//         })
// })

module.exports = router;