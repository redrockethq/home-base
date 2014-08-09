'use strict';

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema
  , ObjectId = Schema.ObjectId
  , _ = require('lodash')
  , personSchema = require('./schemas/person');

var contact = {
  relationship: { type: String, default: 'unknown' },
  canContact: { type: Boolean, default: false }
};



var clientSchema = new Schema({
  assets: [
    {
      url: { type: String }
    }
  ],
  height: { type: String, required: true  },
  weight: { type: Number, min: 0 },
  hairColor: { type: String, required: true },
  eyeColor: { type: String, required: true },
  ssn: { type: Date },
  contacts: [ contact ],
  cases: [
    {
      caseNumber: { type: String },
      judge: {},
      caseWorkers: [],
      startDate: { type: Date, required: true },
      endDate: { type: Date },

      notes: []
    }
  ],
  goals: [
    {
      notes: []
    }
  ],
  assessments: [
    {

    }
  ],
  doctors: [
    { type: ObjectId, ref: 'Doctor' }
  ],
  medications: [
    {
      prescribedBy: { type: ObjectId, ref: 'Doctor' },
      medication: {type: String },
      dosage: { type: String },
      frequency: { type: String },
      startDate: { type: Date },
      endDate: { type: Date }
    }
  ],
  medicalHistories: [
    {
      allergies: { type: String },
      specialNeeds: { type: String },
      sexualTransmittedDiseases: { type: String }
    }
  ]
});

clientSchema = _.defaults(personSchema, clientSchema);

module.exports = Mongoose.model('Client', clientSchema);