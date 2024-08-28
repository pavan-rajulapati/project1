const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    sellerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Seller',
        required : true,
    },
    name : {
        type : String ,
        required : true,
        trim : true
    },
    description : {
        type : String ,
        required : true,
        trim : true
    },
    actualPrice : {
        type : Number ,
        required : true,
        trim : true
    },
    offerPrice : {
        type : Number ,
        required : true,
        trim : true
    },
    images : {
        type : [String],
        required : true,
    },
    category : {
        type : String,
        required: true,
        trim : true
    },
    stock : {
        type : Number,
        default : 1
    },
    sizes : {
        type : [String],
        trim : true
    },
    colors : {
        type : [String],
         trim : true
    }

}, {timestamps : true})

module.exports = mongoose.model('Product',productSchema)