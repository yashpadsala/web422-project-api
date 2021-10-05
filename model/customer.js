const mongoose = require('mongoose');

const { Schema } = mongoose;

const customersSchema = new Schema({

    firstName: {
        type : String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number
    }
});

const customer = mongoose.model('Customer', customersSchema);

module.exports = customer;