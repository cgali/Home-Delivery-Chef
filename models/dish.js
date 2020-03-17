const mongoose = require('mongoose');

const { Schema } = mongoose;

const dishSchema = new Schema(
    {
        name: String,

        image: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true,
        },

        ingredients: {
            type: Array,
            required: true
        },
    });


module.exports = dishSchema;