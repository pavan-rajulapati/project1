const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index : true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    mobileNumber: {
        type: String,
        required: true,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    bestSeller: {
        type: Boolean,
        default: false
    },
    address: {
        street: {
            type: String,
            required: true,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true
        },
        pincode: {
            type: String,
            required: true,
            trim: true
        },
        state: {
            type: String,
            required: true,
            trim: true
        },
        country: {
            type: String,
            required: true,
            trim: true
        }
    },
    bankDetails: {
        holderName: {
            type: String,
            required: true,
            trim: true
        },
        bankName: {
            type: String,
            required: true,
            trim: true
        },
        accountNumber: {
            type: String,
            required: true,
            trim: true
        },
        ifscCode: {
            type: String,
            required: true,
            trim: true
        }
    }
}, { timestamps: true });

module.exports = mongoose.model('Seller', sellerSchema);
