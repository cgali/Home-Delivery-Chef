const mongoose = require('mongoose');

const { Schema } = mongoose;

const chefSchema = new Schema({

    mail: {
        type: String,
        required: true,
        unique: true
    },
<<<<<<< HEAD
    hashedPassword: {
=======
    hashedPassword: { 
>>>>>>> e1c45a016fb338b72d71fc481577792407727e80
        type: String,
        required: true
    },
    image: { type: String },
<<<<<<< HEAD
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
=======
    name: { 
        type: String,
        required: true,
    },
    surname: { 
        type: String,
        required: true,
    },
    yearsOfExperience: { type: Number }
>>>>>>> e1c45a016fb338b72d71fc481577792407727e80

});

const Chef = mongoose.model('Chef', chefSchema);

module.exports = Chef 