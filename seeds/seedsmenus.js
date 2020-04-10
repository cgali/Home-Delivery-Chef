require('dotenv').config();

const mongoose = require('mongoose');
const Menu = require('../models/menu');

mongoose
    .connect(`${process.env.DBURL}`, {
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
        chef_id: '5e8397780e493c32ef1b4892',
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
        chef_id: '5e8397780e493c32ef1b4895',
        cuisine: ['Mediterranean'],
        price: 75,
    },

    {
        title: 'Mediterranean scents',
        starter: {
            name: 'Seared scallop',
            image: '../images/Menus/Jose/searedscallop.jpg',
            description: 'There are few starters as elegant and yet as simple as a dish of seared sea scallops. Sweet, tender, mild, and delectable.',
            ingredients: ['Sea scallops, Butter, Olive oil, Black pepper, Egg, Beet, Milk, Salt '],
        },
        mainCourse: {
            name: 'Steak tartar',
            image: '../images/Menus/Jose/steaktartar.jpg',
            description: 'Steak Tartare is a savoury dish made from raw beef that is ground or finely chopped. ',
            ingredients: ['Beef, Lemon, Olive olive, Cucumber, Capers, Salt, Black pepper'],
        },
        dessert: {
            name: 'Chocolate cake',
            image: '../images/Menus/Jose/Chocolatecake.jpg',
            description: 'Rich, fudgy chocolate cake filled and frosted with chocolate buttercream and nuts.',
            ingredients: ['Chocolate, Sugar, Butter, Nuts, Vanilla, Eggs, Buttermilk'],
        },
        time: 180,
        chef_id: '5e8397780e493c32ef1b4893',
        cuisine: ['Mediterranean'],
        price: 90,
    },

    {
        title: 'M.Eat',
        starter: {
            name: 'Carpaccio and parmesan',
            image: '../images/Menus/Jose/carpaccioparmesano.jpg',
            description: 'Traditional Italian appetizer consisting of raw beef sliced paper-thin, with parmesan, drizzled with olive oil and lemon juice.',
            ingredients: ['Beef, Parmesa, Olive oil, Pine nuts'],
        },
        mainCourse: {
            name: 'Beef lasagna',
            image: '../images/Menus/Jose/beeflasagna.jpg',
            description: 'This lasagna brings together all of the things we love in a good pasta dish, the balance between layers of cheese, noodles, and homemade bolognese sauce is perfection.',
            ingredients: ['Beef, Tomato sauce, Cheese, Noodles, Onion, Fresh basil, Oregano, Olive oil, Salt, Black pepper, Mozzarella'],
        },
        dessert: {
            name: 'Lemon mousse',
            image: '../images/Menus/Jose/Lemonmousse.jpg',
            description: 'A happy ending to any special meal. Lemon mousse, simple, tasty, fresh and always grateful.',
            ingredients: ['Eggs, Caster sugar, Lemons, Cream, Toasted almond'],
        },
        time: 150,
        chef_id: '5e8397780e493c32ef1b4893',
        cuisine: ['Italian'],
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
        chef_id: '5e8397780e493c32ef1b4893',
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
        chef_id: '5e8397780e493c32ef1b4893',
        cuisine: ['Greek'],
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
        chef_id: '5e8397780e493c32ef1b4892',
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
        chef_id: '5e8397780e493c32ef1b4894',
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
        chef_id: '5e8397780e493c32ef1b4895',
        cuisine: ['Mediterranean'],
        price: 60,
    },

    {
        title: 'Catalan bite',
        starter: {
            name: 'Joy salad',
            image: '../images/Menus/Marta/Redsalad.jpg',
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
        chef_id: '5e8397780e493c32ef1b4895',
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