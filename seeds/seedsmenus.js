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
            image: '../images/Menus/Sofie/vegetablestartar.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],
        },
        mainCourse: {
            name: 'Vrigatoni',
            image: '../images/Menus/Sofie/veganrigattoni.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],

        },

        dessert: {
            name: 'Carrot bites',
            image: '../images/Menus/Sofie/carrotbites.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],
        },
        time: '120',
        chef_id: { type: Schema.Types.ObjectId, ref: 'Sofie Levesque' },
        cuisine: [Vegan],
        price: 60,

    },
    {
        title: 'Starry night',
        starter: {
            name: 'vegetables timbale',
            image: '../images/Menus/Sofie/vegetablestimbale.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],
        },
        mainCourse: {
            name: 'Gravy meat',
            image: '../images/Menus/Sofie/carneensalsa.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],

        },

        dessert: {
            name: 'Carrot cake',
            image: '../images/Menus/Sofie/carrotcake.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],
        },
        time: '180',
        chef_id: { type: Schema.Types.ObjectId, ref: 'Sofie Levesque' },
        cuisine: [Mediterranean],
        price: 75,
    },
    {
        title: 'Mediterranean scents',
        starter: {
            name: 'Seared scallop',
            image: '../images/Menus/Jose/searedscallop.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],
        },
        mainCourse: {
            name: 'Steak tartar',
            image: '../images/Menus/Jose/steaktartar.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],

        },
        dessert: {
            name: 'Chocolate cake',
            image: '../images/Menus/Jose/Chocolatecake.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],
        },
        time: '180',
        chef_id: { type: Schema.Types.ObjectId, ref: 'Jose Hernandez' },
        cuisine: [Mediterranean],
        price: 90,
    },
    {
        title: 'M.Eat',
        starter: {
            name: 'Carpaccio and parmesan',
            image: '../images/Menus/Jose/carpaccioparmesan.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],
        },
        mainCourse: {
            name: 'Beef lasagna',
            image: '../images/Menus/Jose/beeflasagna.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],

        },
        dessert: {
            name: 'Lemon mousse',
            image: '../images/Menus/Jose/Lemonmousse.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],
        },
        time: '150',
        chef_id: { type: Schema.Types.ObjectId, ref: 'Chef' },
        cuisine: [Vegan],
        price: 90,
    },
    {
        title: 'Andale',
        starter: {
            name: 'Tacos',
            image: '../images/Menus/Jason/tacos.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],
        },
        mainCourse: {
            name: 'Mexatballs',
            image: '../images/Menus/Jason/mexicanmeatballs.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],

        },
        dessert: {
            name: 'Mex fritter ',
            image: '../images/Menus/Jason/mexicanfritter.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],
        },
        time: '150',
        chef_id: { type: Schema.Types.ObjectId, ref: 'Chef' },
        cuisine: [Vegan],
        price: 45,
    },
    {
        title: 'Vegan night',
        starter: {
            name: '',
            image: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],
        },
        mainCourse: {
            name: '',
            image: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],

        },

        dessert: {
            name: '',
            image: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],
        },
        time: '120',
        chef_id: { type: Schema.Types.ObjectId, ref: 'Chef' },
        cuisine: [Vegan],
        price: 60,
    },
    {
        title: 'Vegan night',
        starter: {
            name: '',
            image: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],
        },
        mainCourse: {
            name: '',
            image: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],

        },

        dessert: {
            name: '',
            image: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],
        },
        time: '150',
        chef_id: { type: Schema.Types.ObjectId, ref: 'Chef' },
        cuisine: [Vegan],
        price: 45,
    },
    {
        title: 'Vegan night',
        starter: {
            name: '',
            image: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],
        },
        mainCourse: {
            name: '',
            image: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],

        },

        dessert: {
            name: '',
            image: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],
        },
        time: '150',
        chef_id: { type: Schema.Types.ObjectId, ref: 'Chef' },
        cuisine: [Vegan],
        price: 45,
    },
    {
        title: 'Vegan night',
        starter: {
            name: '',
            image: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],
        },
        mainCourse: {
            name: '',
            image: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],

        },

        dessert: {
            name: '',
            image: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            ingredients: ['change1, change2, change3, change4, change5, change6'],
        },
        time: '150',
        chef_id: { type: Schema.Types.ObjectId, ref: 'Chef' },
        cuisine: [Vegan],
        price: 45,
    }
];


Menu.create(menus, err => {
    if (err) {
        throw err;
    }
    console.log(`Created ${menus.length} menus`);
    mongoose.connection.close();
});