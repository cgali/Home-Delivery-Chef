const mongoose = require('mongoose');
const Chef = require('../models/chef');

const chefs = [
	{
		mail: 'josehernandez@gmail.com',
		hashedPassword: '',
		image: '/public/images/chefs/JoseHernandez',
		name: 'Jose',
		surname: 'Hernandez',
		yearsOfExperience: 5
	},
	{
		mail: 'jasonlopez@gmail.com',
		hashedPassword: '',
		image: '/public/images/chefs/JasonLopez',
		name: 'Jason',
		surname: 'Lopes',
		yearsOfExperience: 20
	},
	{
		mail: 'marcgarcia@gmail.com',
		hashedPassword: '',
		image: '/public/images/chefs/MarcGarcia',
		name: 'Marc',
		surname: 'Garcia',
		yearsOfExperience: 15
	},
	{
		mail: 'karolsuarez@gmail.com',
		hashedPassword: '',
		image: '/public/images/chefs/KarolSuarez',
		name: 'Karol',
		surname: 'Suarez',
		yearsOfExperience: 17
	},
	{
		mail: 'carlossanchez@gmail.com',
		hashedPassword: '',
		image: '/public/images/chefs/CarlosSanchez',
		name: 'Carlos',
		surname: 'Sanchez',
		yearsOfExperience: 7
	},
	{
		mail: 'sofielevesque@gmail.com',
		hashedPassword: '',
		image: '/public/images/chefs/SofieLevesque',
		name: 'Sofie',
		surname: 'Levesque',
		yearsOfExperience: 20
	},
	{
		mail: 'sandragamez@gmail.com',
		hashedPassword: '',
		image: '/public/images/chefs/SandraGamez',
		name: 'Sandra',
		surname: 'Gamez',
		yearsOfExperience: 4,
	},
	{
		mail: 'martagrau@gmail.com',
		hashedPassword: '',
		image: '/public/images/chefs/MartaGrau',
		name: 'Marta',
		surname: 'Grau',
		yearsOfExperience: 8,
	}
];

// Link to connect to Database: mongodb+srv://chefapp:1234@module2project-ko7or.gcp.mongodb.net/test?retryWrites=true&w=majority
mongoose
	.connect('mongodb+srv://chefapp:1234@module2project-ko7or.gcp.mongodb.net/test?retryWrites=true&w=majority', {
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

Chef.create(chefs, err => {
	if (err) {
		throw err;
	}
	console.log(`Created ${chefs.length} chefs`);
	mongoose.connection.close();
});