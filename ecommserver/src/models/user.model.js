const mongoose = require('mongoose');
const { toJSON } = require('./utils');

const userSchema = mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,

    },
    password: {
        type: String,
    }
    
}, {
    timestamps: true,
});

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);

const user = mongoose.model('user', userSchema);

module.exports = user;