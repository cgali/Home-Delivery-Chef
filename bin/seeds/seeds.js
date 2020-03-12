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