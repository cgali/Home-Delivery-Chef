const mongoose = require('mongoose');

const { Schema } = mongoose;

const chefSchema = new Schema({
    
    mail: {
        String,
        required: true,
        unique: true
    },
    password: { 
        String,
        required: true
    },
    username: { 
        String,
        required: true,
        unique: true
    },
    yearsOfExperience: { Number }

});

const Chef = mongoose.model('Chef', chefSchema);

module.exports = Chef image: { type: String },