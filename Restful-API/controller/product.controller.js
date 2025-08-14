const productmodel = require('../models/product.model');

const addProduct = async (req, res) => {
    try {
            const {name, price, description, image } = req.body;
            const filename=req.file.filename;
            const newProduct = new productmodel({
                name,price,description,image:filename
            })
            const resp = await newProduct.save();
            res.status(201).send({
                message: 'Product added successfully',
                data: resp
            })
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Error while adding product"})
    }
}
const getAllProducts = async (req, res) => {
    try {
            const products = await productmodel.find();
            res.status(200).send({products: resp})
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Error while fetching products"})
    }
}
module.exports = {
    addProduct,
    getAllProducts
}