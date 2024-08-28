const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv')
const bcrypt = require('bcrypt')

dotEnv.config()
const secret_key = process.env.SECRET_KEY

const handleGoogleSignup = async(req,res)=>{
    const {userName, email, googleUid, providerId, profilePic} = req.body;

    if(!userName || !email || !googleUid || !providerId ){
        return res.status(400).json({message : 'Fields required'})
    }

    try {
        const isExist = await User.findOne({email})
        if(isExist){
            return res.status(409).json({message : 'You have already an account please login'})
        }

        let hashedUid = await bcrypt.hash(googleUid, 10)

        const user = new User({
            userName,
            email,
            googleUid : hashedUid,
            providerId ,
            profilePic
        })

        const savedUser = await user.save()

        const token = await jwt.sign({userId : savedUser._id},secret_key,{expiresIn : '24h'})

        return res.status(200).json({message : 'success',authToken : token})

    } catch (error) {
        return res.status(500).json({message : 'Internal Error', error : error.message})
    }
}

module.exports = handleGoogleSignup