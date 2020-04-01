const mongoose = require('mongoose');
const Chef = require('../models/chef');

mongoose
	.connect(`${process.env.DBURL}`, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(x => {
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
		return Chef.insertMany(chefs);
	})
	.catch(err => {
		console.error('Error connecting to mongo', err)
	});

const chefs = [
	{
		email: 'josehernandez@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		image: '../images/chefs/JoseHernandez.jpg',
		name: 'Jose',
		surname: 'Hernandez',
		yearsOfExperience: 5,
	},
	{
		email: 'jasonlopez@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		image: '../images/chefs/JasonLopez.jpg',
		name: 'Jason',
		surname: 'Lopes',
		yearsOfExperience: 20
	},
	{
		email: 'marcgarcia@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		image: '../images/chefs/MarcGarcia.jpg',
		name: 'Marc',
		surname: 'Garcia',
		yearsOfExperience: 15
	},
	{
		email: 'karolsuarez@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		image: '../images/chefs/KarolSuarez.jpg',
		name: 'Karol',
		surname: 'Suarez',
		yearsOfExperience: 17
	},
	{
		email: 'carlossanchez@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		image: '../images/chefs/CarlosSanchez.jpg',
		name: 'Carlos',
		surname: 'Sanchez',
		yearsOfExperience: 7
	},
	{
		email: 'sofielevesque@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		image: '../images/chefs/SofieLevesque.jpg',
		name: 'Sofie',
		surname: 'Levesque',
		yearsOfExperience: 20
	},
	{
		email: 'sandragamez@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		image: '../images/chefs/SandraGamez.jpg',
		name: 'Sandra',
		surname: 'Gamez',
		yearsOfExperience: 4,
	},
	{
		email: 'martagrau@gmail.com',
		hashedPassword: '$2b$10$IXz/ETka.Jk2l6t3py/L1.dkWRVadSaZg41Utnl5zYcOMfvSY7AQ6',
		image: '../images/chefs/MartaGrau.jpg',
		name: 'Marta',
		surname: 'Grau',
		yearsOfExperience: 8,
	}
];

Chef.create(chefs, err => {
	if (err) {
		throw err;
	}
	console.log(`Created ${chefs.length} chefs`);
	mongoose.connection.close();
});