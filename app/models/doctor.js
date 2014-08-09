'use strict';

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema
  , ObjectId = Schema.ObjectId
  , _ = require('lodash')
  , personSchema = require('./schemas/person')
  , address = require('./schemas/address')
  , phone = require('./schemas/phone');



var doctorSchema = new Schema({
  addresses: [address],
  phones: [phone],
  isActive: { type: Boolean, default: false }
});

doctorSchema = _.defaults(personSchema, doctorSchema);
module.exports = Mongoose.model('Doctor', doctorSchema);