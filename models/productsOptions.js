"use strict";

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OptionsSchema = new Schema({
    code: String,
    langs: [{
        _id: false,
        lang: { type: String, default: "fr" },
        name: String
    }],
    isVariant: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

exports.Schema = mongoose.model('productOptions', OptionsSchema, 'ProductOptions');
exports.name = "productOptions";