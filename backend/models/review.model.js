const mongoose  = require('mongoose')

const reviewSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product',
        required : true
    },
    comment : {
        type : String,
        trim : true
    },
    rating : {
        type : Number,
        enum : [0,1,2,3,4,5],
        default :0
    }

}, {timestamps : true})

module.exports = mongoose.model('Review',reviewSchema)