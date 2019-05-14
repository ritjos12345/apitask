'use strict';

var mongoose = require('mongoose'),
    Driver = mongoose.model('Driver');

exports.list_all_drivers = function (req, res) {
    Driver.find({}, function (err, driver) {
        if (err) {
            res.send(err);
        }
        res.json(driver);
    })
};

exports.create_a_driver = function (req, res) {
    var new_driver = new Driver(req.body);
    new_driver.save(function (err, driver) {
        if (err)
            res.send(err);
        res.json(driver);
    })
}
