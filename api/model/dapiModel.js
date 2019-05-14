'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DriverSchema = new Schema({
    d_name: { type: String, required: 'Kindly enter driver name' },
    d_num: { type: String, required: 'Kindly enter driver name' },
    d_vehicle: { type: String, required: 'Kindly enter driver name' },
    d_vseg: { type: String, required: 'Kindly enter driver name' },
    is_avail: { type: Boolean, required: 'Kindly enter driver name' }
});


module.exports = mongoose.model('Driver', DriverSchema);