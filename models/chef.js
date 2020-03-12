const mongoose = require('mongoose');

const { Schema } = mongoose;

const chefSchema = new Schema({
    
    mail: {
        String,
        required: true,
        unique: true
    },
    hashedPassword: { 
        String,
        required: true
    },
    image: { type: String },
    name: { 
        String,
        required: true,
    },
    surname: { 
        String,
        required: true,
    },
    yearsOfExperience: { Number }

});

const Chef = mongoose.model('Chef', chefSchema);

module.exports = Chef 