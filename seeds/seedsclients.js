const mongoose = require('mongoose');
const Client = require('../models/client');

mongoose
	.connect('mongodb+srv://chefapp:1234@module2project-ko7or.gcp.mongodb.net/HomeDeliveryChef?retryWrites=true&w=majority', {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(x => {
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
		// return Client.insertMany(clients);
	})
	.catch(err => {
		console.error('Error connecting to mongo', err)
	});

const clients = [
	{
		email: 'carles@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		cart: {
			name: [],
			price: [],
			image: [],
		}
	},
	{
		email: 'carla@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		cart: {
			name: '',
			price: '',
			image: '',
		}
	},
	{
		email: 'pablo@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		cart: {
			name: '',
			price: '',
			image: '',
		}
	}
];

Client.create(clients, err => {
	if (err) {
		throw err;
	}
	console.log(`Created ${clients.length} clients`);
	mongoose.connection.close();
});