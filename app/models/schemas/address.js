"use strict";

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema;

module.exports = new Schema({
  type: { type: String, enum: ['Home', 'Work', 'Other'], default: 'Home' },
  address: { type: String, required: true },
  city: {type: String, required: true },
  state: { type: String, required: true },
  zip: {type: String, required: true },
  active: { type: Boolean, default: true }
});