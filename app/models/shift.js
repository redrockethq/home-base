'use strict';

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema
  , ObjectId = Schema.ObjectId;

var shiftSchema = new Schema({
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  users: [
    {
      type: ObjectId, ref: 'User'
    }
  ],
  notes: [
    {
      message: { type: String },
      writtenBy: { type: ObjectId, ref: 'User'},
      isPrivate: { type: Boolean, default: false }
    }
  ]
});

module.exports = Mongoose.model('Shift', shiftSchema);