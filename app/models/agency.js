'use strict';

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema
  , ObjectId = Schema.ObjectId
  , _ = require('lodash');

var agencySchema = new Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  users: [
    { type: ObjectId, ref: 'User', administrator: { type: Boolean, default: true } }
  ],
  clients: [
    { type: ObjectId, ref: 'Client' }
  ],
  locations: [
    {
      name: { type: String, required: true },
      address: { type: String, required: true },
      address2: String,
      city: { type: String, required: true },
      state: { type: String, required: true, default: 'UT'},
      zip: { type: String, required: true },
      isPublic: { type: Boolean, default: true },
      phones: [
        {
          phoneNumber: { type: String, required: true },
          kind: { type: String, required: true, enum: ["Office", "Mobile", "Home", "Fax", "Other"] },
          isPublic: { type: Boolean, default: true }
        }
      ],
      hours: [
        {
          day: { type: String, required: true, enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] },
          startTime: { type: String },
          endTime: { type: String }
        }
      ]
    }
  ],
  active: { type: Boolean, default: true }
});

module.exports = Mongoose.model('Agency', agencySchema);