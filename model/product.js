const mongoose = require('mongoose');

const { Schema } = mongoose;

const productsSchema = new Schema({

    productName: {
        type : String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productDescription: {
        type: String
    },
    productCategory: {
        type: String,
        required: true
    },
    quantity: {
        type: Number
    },
    bestseller : {
        type: Boolean,
        required: true
    },
    photo : {
        type: String
    }
});

const product = mongoose.model('Product', productsSchema);

module.exports = product;