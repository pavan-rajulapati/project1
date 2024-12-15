const Product = require('../../models/product.model')
const multer = require('multer')
const Seller = require('../../models/seller.model')
const redisClient = require('../../middlewares/redis')
const sendResponse = require('../../controller/post/sendResponse')

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname)
    },
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    }
})

const upload = multer({ storage: storage }).array('files')

const handleProduct = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.log('Error uploading files:', err.message); 
            return sendResponse(res, 400, 'error', 'Multer Error' || 'Unkonwn Error')
        } else {
            const { name, brand, description, actualPrice, offerPrice, category, stock, warranty, sizes, colors } = req.body;
            if (!name || !description || !actualPrice || !offerPrice || !category || !stock ) {
                console.log('All fields are required'); 
                return sendResponse(res, 400, 'error', 'All fields are required' || 'Unkonwn Error')
            }

            let images = req.files ? req.files.map(file => file.path) : [];

            let userId = req.user._id;
            let seller = await Seller.findOne({ userId });
            if (!seller) {
                console.log('You are not a seller'); 
                return sendResponse(res, 401, 'error', 'Unauthorized Not a seller' || 'Unkonwn Error')            
            }
            try {
                const product = new Product({
                    sellerId: seller._id,
                    name,
                    brand,
                    description,
                    actualPrice,
                    offerPrice,
                    category,
                    stock,
                    warranty,
                    sizes: Array.isArray(sizes) ? sizes : [sizes],
                    colors: Array.isArray(colors) ? colors : [colors],
                    images
                });
                const savedProduct = await product.save();

                await redisClient.setEx(`product:${savedProduct._id}`, 60 * 60, JSON.stringify(product));
                return sendResponse(res, 200, 'Success');

            } catch (error) {
                console.log('Internal error:', error);
                return sendResponse(res, 500, 'error', 'Internal Error' || 'Unkonwn Error')            
            }
        }
    });
}


module.exports = handleProduct
