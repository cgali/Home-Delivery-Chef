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
        title: 'Vegan night',
        starter: {
            name: '',
            image: '',
            description: '',
            ingredients: [''],
        },
        mainCourse: {
            name: '',
            image: '',
            description: '',
            ingredients: '',

        },

        dessert: dishSchema,
        time: '',
        chef_id: { type: Schema.Types.ObjectId, ref: 'Chef' },
        cuisine: { type: Array },
        price: 3,

    }
];


Menu.create(menus, err => {
    if (err) {
        throw err;
    }
    console.log(`Created ${menus.length} menus`);
    mongoose.connection.close();
});