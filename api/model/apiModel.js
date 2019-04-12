'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TravelSchema = new Schema({
  req_name: {
    type: String,
    required: 'Kindly enter the requestor info'
  },
  req_comp: {
    type: String,
    required: 'Kindly enter the requestor info'
  },
  req_mail: {
    type: String,
    required: 'Kindly enter the requestor info'
  },
  req_num: {
    type: String,
    required: 'Kindly enter the requestor info'
  },
  veh_seg: {
    type: String,
    required: 'Kindly enter the requestor info'
  },
  from_date: {
    type: Date,
    required: 'Kindly enter the requestor info'
  },
  pickup_loc: {
    type: String,
    required: 'Kindly enter the requestor info'
  },
  from_date: {
    type: String,
    required: 'Kindly enter the requestor info'
  },
  drop_loc: {
    type: String,
    required: 'Kindly enter the requestor info'
  },
  pickup_add: {
    type: String,
    required: 'Kindly enter the requestor info'
  },
  drop_add: {
    type: String,
    required: 'Kindly enter the requestor info'
  },

  pickup_time: {
    type: Date,
    required: 'Kindly enter the requestor info'
  },
  drop_time: {
    type: String,
    required: 'Kindly enter the requestor info'
  },
  hire_type: {
    type: String,
    required: 'Kindly enter the requestor info'
  },
  for_use: {
    type: String,
    required: 'Kindly enter the requestor info'
  },
  request_id: {
    type: String,
    required: 'Kindly enter the requestor info'
  }

});

module.exports = mongoose.model('TravelRequest', TravelSchema);