let productModel = require('../models/products.model');

module.exports.save = async (req,res) => {
    const product = new productModel(req.body);
    let result = await product.save();
    res.json(result)
}

module.exports.find = async (req,res) => {
    if(req.query.name){

        let result = await productModel.find({name: new RegExp(req.query.name, "i")});
        res.json(result);
    }else
    {
        let result = await productModel.find();
        res.json(result);

    }
    
    
}

module.exports.findById = async (req,res) => {
    const { id } = req.params;
    let result = await productModel.findById(id)
    res.json(result)
}

module.exports.remove = async (req,res) => {
    let result = await productModel.deleteMany(req.params)
    res.json(result)
}

module.exports.removeById = async (req,res) => {
    const { id } = req.params;
    let result = await productModel.findByIdAndDelete(id)
    res.json(result)
}

module.exports.updateById = async (req,res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
    let result = await productModel.findByIdAndUpdate(id,updatedData, { new:true });
        if(!result){
            return res.status(404).json({ error: 'No product found' });
        } 
        res.json(result)
    } catch(err) {
        console.error(err);
        res.status(500).json({err: 'Couldnt update the product'});
    }   
}

module.exports.findPublished = async (req,res) => {

    let result = await productModel.find({ published:true})
    res.json(result)
    
}

module.exports.findByName = async (req,res) => {
    const nameSearch =  req.query.name ;
    
    let result = await productModel.find({ name: new RegExp(nameSearch, "i") });
    res.json(result)
} 