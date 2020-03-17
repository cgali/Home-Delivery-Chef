const mongoose = require('mongoose');
const dishSchema = require('./dish');

const { Schema } = mongoose;

const menuSchema = new Schema(
  {

    title: {
      type: String,
      required: true,
    },

    starter: dishSchema,
    mainCourse: dishSchema,
    dessert: dishSchema,

    time: {
      type: Number,
      required: true,
    },

    chef_id: { type: Schema.Types.ObjectId, ref: 'Chef' },

    cuisine: { type: Array },

    price: {
      type: Number,
      required: true
    },
  },

  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },

  });

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;