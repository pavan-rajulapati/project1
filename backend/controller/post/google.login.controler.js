const User = require('../../models/user.model')
const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv')
const bcrypt = require('bcrypt')
const cookies = require('../../utils/cookies')

dotEnv.config()
const secret_key = process.env.SECRET_KEY

const handleGoogleLogin = async(req,res)=>{
    const {email, googleUid} = req.body;

    if(!email || !googleUid){
        return res.status(400).json({message : 'Fileds required'})
    }

    try {
        const isExist = await User.findOne({email})
        if(!isExist){
            return res.status(401).json({message :  'Un Authorized user'})
        }

        const checkId = await bcrypt.compare(googleUid, isExist.googleUid)
        if(!checkId){
            return res.status(401).json({message :  'Un Authorized user'})
        }
        
        
        const token = await jwt.sign({userId : isExist._id},secret_key,{expiresIn : '24h'})
        cookies(res, token, process.env.NODE_ENV)

        return res.status(200).json({mssage : 'success',authToken : token})
    } catch (error) {
        return res.status(500).json({message : 'Internal Error'})
    }
}

module.exports = handleGoogleLogin
