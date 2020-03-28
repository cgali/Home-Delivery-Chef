const mongoose = require('mongoose');
const Menu = require('../models/menu');

mongoose
    .connect('mongodb+srv://chefapp:1234@module2project-ko7or.gcp.mongodb.net/HomeDeliveryChef?retryWrites=true&w=majority', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
        return Menu.insertMany(menus);
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

const menus = [
    {
        title: 'Vegan Time',
        starter: {
            name: 'Vegetables tartar',
            image: '../images/Menus/Sofie/tartarverduras.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        mainCourse: {
            name: 'Vrigatoni',
            image: '../images/Menus/Sofie/veganrigattoni.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        dessert: {
            name: 'Carrot bites',
            image: '../images/Menus/Sofie/carrotbites.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        time: 120,
        chef_id: '5e6faddee4c68221b0d1955f',
        cuisine: ['Vegan'],
        price: 60,
    },

    {
        title: 'Starry night',
        starter: {
            name: 'Vegetables timbale',
            image: '../images/Menus/Sofie/vegetablestimbale.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        mainCourse: {
            name: 'Gravy meat',
            image: '../images/Menus/Sofie/carneensalsa.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],

        },

        dessert: {
            name: 'Carrot cake',
            image: '../images/Menus/Sofie/carrotcake.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        time: 180,
        chef_id: '5e6faddee4c68221b0d1955f',
        cuisine: ['Mediterranean'],
        price: 75,
    },

    {
        title: 'Mediterranean scents',
        starter: {
            name: 'Seared scallop',
            image: '../images/Menus/Jose/searedscallop.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        mainCourse: {
            name: 'Steak tartar',
            image: '../images/Menus/Jose/steaktartar.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        dessert: {
            name: 'Chocolate cake',
            image: '../images/Menus/Jose/Chocolatecake.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        time: 180,
        chef_id: '5e6faddee4c68221b0d1955a',
        cuisine: ['Mediterranean'],
        price: 90,
    },

    {
        title: 'M.Eat',
        starter: {
            name: 'Carpaccio and parmesan',
            image: '../images/Menus/Jose/carpaccioparmesano.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        mainCourse: {
            name: 'Beef lasagna',
            image: '../images/Menus/Jose/beeflasagna.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        dessert: {
            name: 'Lemon mousse',
            image: '../images/Menus/Jose/Lemonmousse.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        time: 150,
        chef_id: '5e6faddee4c68221b0d1955a',
        cuisine: ['Mediterranean'],
        price: 90,
    },

    {
        title: 'Ándale',
        starter: {
            name: 'Tacos',
            image: '../images/Menus/Jason/tacos.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        mainCourse: {
            name: 'Mexatballs',
            image: '../images/Menus/Jason/mexicanmeatballs.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        dessert: {
            name: 'Mex fritter ',
            image: '../images/Menus/Jason/mexicanflan.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        time: 150,
        chef_id: '5e6faddee4c68221b0d1955b',
        cuisine: ['Mexican'],
        price: 50,
    },

    {
        title: 'Seansation',
        starter: {
            name: 'Prawn bruschetta',
            image: '../images/Menus/Marc/prawnbruschetta.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        mainCourse: {
            name: 'Black rice with shrimp',
            image: '../images/Menus/Marc/arrozcalamares.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        dessert: {
            name: 'Jelly fruit cake',
            image: '../images/Menus/Marc/jellyfruitcake.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        time: 120,
        chef_id: '5e6faddee4c68221b0d1955c',
        cuisine: ['Mediterranean'],
        price: 70,
    },

    {
        title: 'Special simplicity',
        starter: {
            name: 'Tomato soup',
            image: '../images/Menus/Karol/tomatosoup.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        mainCourse: {
            name: 'Hake with soy sauce',
            image: '../images/Menus/Karol/merluzasoja.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        dessert: {
            name: 'Chocolate and red paradise',
            image: '../images/Menus/Karol/chocolatefluff.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        time: 150,
        chef_id: '5e6faddee4c68221b0d1955d',
        cuisine: ['Peruan'],
        price: 60,
    },

    {
        title: 'Bite by bite',
        starter: {
            name: 'Green cream',
            image: '../images/Menus/Carlos/greencream.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        mainCourse: {
            name: 'Paella',
            image: '../images/Menus/Carlos/paella.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        dessert: {
            name: 'Cheescake',
            image: '../images/Menus/Carlos/cheescake.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        time: 170,
        chef_id: '5e6faddee4c68221b0d1955e',
        cuisine: ['Mediterranean'],
        price: 65,
    },

    {
        title: 'Forest ñam',
        starter: {
            name: 'Stuffed eggplant',
            image: '../images/Menus/Sandra/berenjenarellena.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        mainCourse: {
            name: 'Cannelloni with truffle',
            image: '../images/Menus/Sandra/canelonestrufa.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        dessert: {
            name: 'Panna cotta',
            image: '../images/Menus/Sandra/panacotta.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        time: 160,
        chef_id: '5e6faddee4c68221b0d19560',
        cuisine: ['Mediterranean'],
        price: 60,
    },

    {
        title: 'Catalan bite',
        starter: {
            name: 'Joy salad',
            image: '../images/Menus/Marta/redsalad.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        mainCourse: {
            name: 'Escudella',
            image: '../images/Menus/Marta/escudella.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        dessert: {
            name: 'Crema catalana',
            image: '../images/Menus/Marta/cremacatalana.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1', 'change2', 'change3', 'change4', 'change5', 'change6'],
        },
        time: 180,
        chef_id: '5e6faddee4c68221b0d19561',
        cuisine: ['Catalan'],
        price: 60,
    }
];


Menu.create(menus, err => {
    if (err) {
        throw err;
    }
    console.log(`Created ${menus.length} menus`);
    mongoose.connection.close();
});