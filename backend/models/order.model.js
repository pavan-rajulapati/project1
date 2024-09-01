const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: true
    },
    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    totalAmount: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'success', 'failed'],
        default: 'pending'
    },
    orderStatus: {
        type: String,
        required: true,
        enum: ['pending', 'processing', 'shipped', 'out for delivery', 'delivered', 'canceled'],
        default: 'pending'
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'UserAddress'
    },
    cancellationReason: {
        type: String,
        trim: true
    }
}, { timestamps: true });

orderSchema.index({
    'products.productId': 1,
    'products.quantity': 1,
    totalAmount: 1,
    userId : 1
});

module.exports = mongoose.model('Order', orderSchema);
