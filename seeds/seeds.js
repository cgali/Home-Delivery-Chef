const mongoose = require('mongoose');
const Chef = require('../models/chef');

// Link to connect to Database: mongodb+srv://chefapp:1234@module2project-ko7or.gcp.mongodb.net/test?retryWrites=true&w=majority
mongoose
	.connect('mongodb+srv://chefapp:1234@module2project-ko7or.gcp.mongodb.net/test?retryWrites=true&w=majority', {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(x => {
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
	})
	.catch(err => {
		console.error('Error connecting to mongo', err)
	});

const chefs = [
	{
		mail: 'josehernandez@gmail.com',
		hashedPassword: '',
		image: '',
		name: '',
		surname: '',
		yearsOfExperience: '',
    },
	{
		mail: '',
		hashedPassword: '',
		image: '',
		name: '',
		surname: '',
		yearsOfExperience: '',
	},
	{
		mail: '',
		hashedPassword: '',
		image: '',
		name: '',
		surname: '',
		yearsOfExperience: '',
	},
	{
		mail: '',
		hashedPassword: '',
		image: '',
		name: '',
		surname: '',
		yearsOfExperience: '',
	},
	{
		mail: '',
		hashedPassword: '',
		image: '',
		name: '',
		surname: '',
		yearsOfExperience: '',
	},
	{
		mail: '',
		hashedPassword: '',
		image: '',
		name: '',
		surname: '',
		yearsOfExperience: '',
	},
	{
		mail: '',
		hashedPassword: '',
		image: '',
		name: '',
		surname: '',
		yearsOfExperience: '',
	},
	{
		mail: '',
		hashedPassword: '',
		image: '',
		name: '',
		surname: '',
		yearsOfExperience: '',
	}
];

Chef.create(chefs, err => {
	if (err) {
		throw err;
	}
	console.log(`Created ${chefs.length} movies`);
	mongoose.connection.close();
});