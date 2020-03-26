const express = require('express');
const Menus = require('../models/menu');
const Dish = require('../models/dish');

const router = express.Router();

// GET /menus page.
router.get('/', (req, res) => {
    const { currentChef, currentClient } = req.session;
    Menus.find()
        .then(menus => {
            console.log('listing menus');
            res.render('menus', { menus, currentChef, currentClient });
        })
        .catch(err => console.log('Error while listing Menus: ', err));
});

// GET menus form page "add"
router.get('/add', (req, res) => { 
    res.render('menu-create')
})

// GET /menus/:id page.
router.get('/:id', (req, res) => {
    const { currentChef, currentClient } = req.session;
    const { id } = req.params;
    Menus.findById(id)
        .then(foundMenu => {
            console.log('Rendering ONE Menu');
            res.render('menu-info', { foundMenu, currentChef, currentClient });
        })
        .catch(err => console.log('Error while listing Menus Information: ', err));
});

// GET /menus/:id/update
router.get('/:id/update-menu', (req, res, next) => {
    const { id } = req.params;
    Menus.findById(id)
        .then(menuInfo => {
            res.render('update-menu', { menuInfo })
        })
        .catch(next);
})

// POST /menu/:id/update
router.post('/:id', (req, res) => {
    const { id } = req.params;
    console.log('THIS IS THE ID: ', id)
    const { 
        title, 
        starterName, 
        starterImage, 
        starterDescription, 
        starterIngredients, 
        mainCourseName, 
        mainCourseImage, 
        mainCourseDescription,
        mainCourseIngredients,
        dessertsName, 
        dessertsImage, 
        dessertsDescription, 
        dessertsIngredients, 
        time, 
        cuisine, 
        price 
    } = req.body;
    console.log(req.query)
    Menus.findByIdAndUpdate(id, {
        title,
        starter: { 
            name: starterName,
            image: starterImage,
            description: starterDescription,
            ingredients: starterIngredients
        },
        mainCourse: { 
            name: mainCourseName,
            image: mainCourseImage,
            description: mainCourseDescription,
            ingredients: mainCourseIngredients
        },
        desserts: { 
            name: dessertsName,
            image: dessertsImage,
            description: dessertsDescription,
            ingredients: [ dessertsIngredients ]
        },
        time,
        cuisine,
        price
    })
    .then(() => {
        res.redirect(`/menus/${id}`);
    })
})

// POST create new menu
router.post('/', (req, res, next) => {
    const {
        title, 
        starterName, 
        starterImage, 
        starterDescription, 
        starterIngredients, 
        mainCourseName, 
        mainCourseImage, 
        mainCourseDescription,
        mainCourseIngredients,
        dessertsName, 
        dessertsImage, 
        dessertsDescription, 
        dessertsIngredients, 
        time, 
        cuisine, 
        price
    } = req.body;
    Menus.create({
        title,
        starter: { 
            name: starterName,
            image: starterImage,
            description: starterDescription,
            ingredients: starterIngredients.split(",")
        },
        mainCourse: { 
            name: mainCourseName,
            image: mainCourseImage,
            description: mainCourseDescription,
            ingredients: mainCourseIngredients.split(",")
        },
        desserts: { 
            name: dessertsName,
            image: dessertsImage,
            description: dessertsDescription,
            ingredients: dessertsIngredients.split(",")
        },
        time,
        cuisine: cuisine.split(","),
        price
    })
    .then(() => {
        res.redirect('/menus');
    })
    .catch(next);
})

module.exports = router;