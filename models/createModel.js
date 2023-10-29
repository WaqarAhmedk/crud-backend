const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    pName: {
        type: String,
        required: true
    },
    pPrice: {
        type: Number,
        required: true
    },
    pQuantity: {
        type: Number,
        required: true
    }
}, { timestamps: true })


const productModel = mongoose.model('product', productSchema);
module.exports = productModel;