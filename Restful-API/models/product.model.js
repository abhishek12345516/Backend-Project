const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {type: String,required: true},
    price: {type: Number,required: true},
    description: {type: String,required: true},
    image: {type: String,required: true}
    
})

const productmodel = mongoose.model('Product', productSchema);
module.exports = productmodel;