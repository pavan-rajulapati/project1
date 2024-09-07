const Seller = require('../../models/seller.model')
const redisClient = require('../../middlewares/redis')

const handleSeller = async(req,res)=>{
    const sellerId = req.params.id
    if(!sellerId){
        return res.status(400).json({message : 'Params not sent'})
    }
    try {
        
    } catch (error) {
        
    }
}