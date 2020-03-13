const mongoose = require('mongoose');
const Movie = require('../models/chef');

mongoose
	.connect('mongodb://localhost/', {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(x => {
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
		// modelMovie.create(seedsData)
	})
	.catch(err => {
		console.error('Error connecting to mongo', err)
	});

const chefs = [
	{
		mail: 'josehernandez@gmail.com',
		hashedPassword:
			image: ''
		name: 'Jose',
		surname: 'Hernandez'
		yearsOfExperience: 5
	},
	{
		mail: 'jasonlopez@gmail.com',
		hashedPassword:
			image:
		name: 'Jason' 
		surname: 'Lopes'
			yearsOfExperience: 20
	},
	{
		mail: 'marcgarcia@gmail.com',
		hashedPassword:
			image:
		name: 'Marc'
		surname: 'Garcia'
			yearsOfExperience: 15
	},
	{
		mail: 'karolsuarez@gmail.com',
		hashedPassword:
			image:
		name: 'Karol'
		surname: 'Suarez'
			yearsOfExperience: 17
	},
	{
		mail: 'carlossanchez@gmail.com',
		hashedPassword:
			image:
		name: 'Carlos',
		surname: 'Sanchez',
		yearsOfExperience: 7
	},
	{
		mail: 'sofielevesque@gmail.com',
		hashedPassword:
			image:
		name: 'Sofie',
		surname: 'Levesque',
		yearsOfExperience: 20
	},
	{
		mail:
			hashedPassword:
		image:
			name:
		surname:
			yearsOfExperience:
	},
	{
		mail:
			hashedPassword:
		image:
			name:
		surname:
			yearsOfExperience:
	}
];
Movie.create(movies, err => {
	if (err) {
		throw err;
	}
	console.log(`Created ${movies.length} movies`);
	mongoose.connection.close();
});