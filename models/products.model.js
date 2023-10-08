const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProdSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    category: String,
    
    published:{
        type: Boolean,
        default: false
    }

});

module.exports= mongoose.model('product',ProdSchema);
