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
            return res.status(400).json({ message: 'Error uploading files: ' + err.message })
        } else {
            const { name, description, actualPrice, offerPrice, category, stock, sizes, colors } = req.body
            if (!name || !description || !actualPrice || !offerPrice || !category || !stock || !sizes || !colors) {
                return res.status(400).json({ message: 'All fields are required' })
            }

            let images = req.files ? req.files.map(file => file.path) : []

            let userId = req.user._id
            let seller = await Seller.findOne({userId})
            if (!seller) {
                return res.status(404).json({ message: 'You are not a registered seller, please register first' })
            }

            try {
                const product = new Product({
                    sellerId: seller._id,
                    name,
                    description,
                    actualPrice,
                    offerPrice,
                    category,
                    stock,
                    sizes: Array.isArray(sizes) ? sizes : [sizes],
                    colors: Array.isArray(colors) ? colors : [colors],
                    images
                })
                const savedProduct = await product.save()

                await redisClient.setEx(`product:${savedProduct._id}`, 60 * 60, JSON.stringify(product))
                return res.status(200).json({ message: 'Product saved successfully', product: savedProduct })

            } catch (error) {
                return res.status(500).json({ message: 'Internal Server Error: ' + error.message })
            }
        }
    })
}

module.exports = handleProduct
