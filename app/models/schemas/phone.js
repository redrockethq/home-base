'use strict';

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

exports = new Schema({
  kind: { type: String, enum: ["Office", "Mobile", "Home", "Fax", "Other"], default: 'Mobile' },
  phoneNumber: {type: String, required: true },
  active: {type: Boolean, default: true }
});
