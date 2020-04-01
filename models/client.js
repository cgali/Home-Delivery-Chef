const mongoose = require('mongoose');

const { Schema } = mongoose;

const clientSchema = new Schema(
{
	email: {
		type: String,
		required: true,
		unique: true
	},
	hashedPassword: {
		type: String,
		required: true
	},
	cart: {
		name: { type: Array },

		price: { type: Array },

		image: { type: Array },
	},
},
{
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	},
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;