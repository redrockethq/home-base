"use strict";

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema;

var personSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true },
  email: {type: String, index: { unique: true, sparse: true }, lowercase: true, required: true },
  birthday: { type: Date, required: true },
  gender: { type: String, enum: ['Male', 'Female'], default: 'Female' },
  isActive: { type: Boolean, default: true }
});

personSchema.virtual('fullName').get(function () {
  return this.firstName + ' ' + this.lastName;
});

module.exports = personSchema;

