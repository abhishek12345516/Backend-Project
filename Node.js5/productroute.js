const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("All Products");
})

router.post('/', (req, res) => {
    res.send("Create a new product");
})

router.get('/:id', (req, res) => {
    res.send("Get Product By ID");
})

module.exports = router;