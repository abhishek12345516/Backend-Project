const express = require('express');
const {addProduct} = require('./controllers/product.controller');
const upload = require('./middlewares/fileupload');
const { getAllProducts } = require('../controller/product.controller');
const router = express.Router();

router.post('/', upload.single('image'), addProduct);
router.get('/', getAllProducts);

module.exports = router;