'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TravelSchema = new Schema({
  req_name: {
    type: String,
    required: 'Kindly enter the requestor name'
  },
  req_comp: {
    type: String,
    required: 'Kindly enter the requestor company'
  },
  req_mail: {
    type: String,
    required: 'Kindly enter the requestor mail'
  },
  req_num: {
    type: String,
    required: 'Kindly enter the requestor number'
  },
  veh_seg: {
    type: String,
    required: 'Kindly enter the requestor vehicle segment'
  },
/**  from_date: {
    type: Date,
    required: 'Kindly enter the requestor from date'
  },
  pickup_loc: {
    type: String,
    required: 'Kindly enter the requestor info'
  },
  drop_loc: {
    type: String,
    required: 'Kindly enter the requestor info'
  },**/
  pickup_add: {
    type: String,
    required: 'Kindly enter the requestor pickup address'
  },
  drop_add: {
    type: String,
    required: 'Kindly enter the requestor drop address'
  },

  pickup_time: {
    type: Date,
    required: 'Kindly enter the requestor pickup time'
  },
  drop_time: {
    type: Date,
    required: 'Kindly enter the requestor drop time'
  },
  hire_type: {
    type: String,
    required: 'Kindly enter the requestor hire type'
  },
  for_use: {
    type: String,
    required: 'Kindly enter the requestor for use'
  },
  request_id: {
    type: String,
    required: 'Kindly enter the request ID'
  },
  veh_id: {
    type: String
  },
  GSTIN:{
	type: String  
  },
  driver:{
	type: String
  },
  start_km:{
	type: String
  },
  end_km:{
	type : String  
  }
});


module.exports = mongoose.model('TravelRequest', TravelSchema);
