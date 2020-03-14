const mongoose = require('mongoose');

const { Schema } = mongoose;

const chefSchema = new Schema({

    mail: {
        type: String,
        required: true,
        unique: true
    },
    hashedPassword: {
        type: String,
        // required: true
    },
    image: { type: String, },
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    yearsOfExperience: {
        type: Number,
        required: true,
    },

    languages: {
        type: Array,
        required: true
    },

});

const Chef = mongoose.model('Chef', chefSchema);

module.exports = Chef 