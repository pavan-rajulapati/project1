const userDetails = require('../../models/userDetails.model')
const redisClient = require('../../middlewares/redis')

const handleUserDetails = async(req, res)=>{
    const {firstName, lastName, gender, dateOfBirth, mobileNumber} = req.body;

    if(!firstName || !lastName || !gender || !dateOfBirth || !mobileNumber) {
        return res.status(400).json({message : 'Fields Required'})
    }

    const userId = req.user._id;
    if(!userId){
        return res.status(401).json({message : 'Token required'})
    }

    try {
        const isDetailExist = await userDetails.findOne({userId})
        if(isDetailExist){
            return res.status(302).json({message : 'Details already existed'})
        }

        const UserDetails = new userDetails({
            userId,
            firstName,
            lastName, 
            gender, 
            dateOfBirth, 
            mobileNumber
        })

        await UserDetails.save()
        await redisClient.setEx(`userDetails:${userId._id}`,60 * 60, JSON.stringify(UserDetails));

        return res.status(200).json({message : 'success', data : UserDetails})
    } catch (error) {
        return res.status(500).json({message : 'Internal Error'})
    }
}

module.exports = handleUserDetails