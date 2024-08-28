const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    password : {
        type : String,
        trim : true
    },
    googleUid: {
        type: String,
        unique: true,
    },
    providerId: {
        type: String,
        default: 'local',
    },
    profilePic : {
        type : String,
        default : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvZ0pbf4bXvAJgVZVuRQqrNWnoWl96cV6wQ&s'
    },
    isAdmin : {
        type : Boolean,
        default : false
    }
}, {timestamps : true})

module.exports = mongoose.model('User',userSchema);