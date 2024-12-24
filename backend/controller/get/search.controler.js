const Product = require('../../models/product.model')
const sendResponse = require('../post/sendResponse')
const redisClient = require('../../middlewares/redis')

const GetSearchProduct = async(req, res)=>{
    try {
        const { query = '', page = 1, limit = 10 } = req.query;

        const pageNumber = parseInt(page, 10);
        const limitNumber = parseInt(limit, 10);

        const skip = (pageNumber - 1) * limitNumber;

        const products = await Product.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },        
                { description: { $regex: query, $options: 'i' } } 
            ]
        })
            .skip(skip)
            .limit(limitNumber);

        const totalResults = await Product.countDocuments({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } }
            ]
        });

        const totalPages = Math.ceil(totalResults / limitNumber);

        res.json({
            products,
            currentPage: pageNumber,
            totalPages,
            totalResults,
        });
    } catch (error) {
        console.error('Error fetching paginated search results:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

module.exports = GetSearchProduct