'use strict';

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema
  , ObjectId = Schema.ObjectId
  , Bcrypt = require('bcrypt')
  , SALT_WORK_FACTOR = 10
  , _ = require('lodash')
  , personSchema = require('./schemas/person')
  , Hat = require('hat')
  , Moment = require('moment');


var userSchema = new Schema({
  agency: { type: ObjectId, ref: 'Agency'},
  password: { type: String, required: true },
  createdAt: {type: Date, default: Date.now },
  updatedAt: {type: Date },
  isActive: { type: Boolean, default: true },
  sessions: [
    {
      token: { type: String, default: Hat(), required: true },
      expiresAt: { type: Date, default: Moment().add(1, 'day') }
    }
  ]
});

userSchema = _.defaults(personSchema, userSchema);

userSchema.pre('save', function (next) {
  var self = this;
  if (!self.isModified('password')) return next();
  Bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);
    Bcrypt.hash(self.password, salt, function (err, hash) {
      if (err) return next(err);
      self.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  Bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = Mongoose.model('User', userSchema);