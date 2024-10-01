const Product = require('../../models/product.model')
const multer = require('multer')
const Seller = require('../../models/seller.model')
const redisClient = require('../../middlewares/redis')

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
            return res.status(400).json({ message: 'Error uploading files: ' + err.message });
        } else {
            const { name, brand, description, actualPrice, offerPrice, category, stock, warranty, sizes, colors } = req.body;
            if (!name || !description || !actualPrice || !offerPrice || !category || !stock ) {
                console.log('All fields are required'); 
                return res.status(400).json({ message: 'All fields are required' });
            }

            let images = req.files ? req.files.map(file => file.path) : [];

            let userId = req.user._id;
            let seller = await Seller.findOne({ userId });
            if (!seller) {
                console.log('You are not a seller'); 
                return res.status(404).json({ message: 'You are not a seller' });
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
                return res.status(200).json({ message: 'Product saved successfully', product: savedProduct });

            } catch (error) {
                console.log('Internal error:', error);
                return res.status(500).json({ message: 'Internal Server Error: ' + error.message });
            }
        }
    });
}


module.exports = handleProduct
