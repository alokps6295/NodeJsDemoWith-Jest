const mongoose = require('mongoose');
const {Schema}=require('mongoose');
const { toJSON } = require('./utils');

const productSchema = mongoose.Schema({
    name: {
        type: String,

    },
    description: {
        type: String,

    },
    price: {
        type: Number,
    },
    usermail : { type:String},
}, {
    timestamps: true,
});

// add plugin that converts mongoose to json
productSchema.plugin(toJSON);

const product= mongoose.model('product', productSchema);

module.exports = product;