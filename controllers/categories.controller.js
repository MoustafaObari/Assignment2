let catModel = require('../models/categories.model');

module.exports.find = async (req,res) => {
    let result = await catModel.find(req.params)
    res.json(result)
}

module.exports.findById = async (req,res) => {
    const { id } = req.params;
    let result = await catModel.findById(id)
    res.json(result)
}

module.exports.save = async (req,res) => {
    const category = new catModel(req.body);
    let result = await category.save();
    res.json(result)
}

module.exports.remove = async (req,res) => {
    let result = await catModel.deleteMany(req.params)
    res.json(result)
}

module.exports.removeById = async (req,res) => {
    const { id } = req.params;
    let result = await catModel.findByIdAndDelete(id)
    res.json(result)
}

module.exports.updateById = async (req,res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
    let result = await catModel.findByIdAndUpdate(id,updatedData, { new:true });
        if(!result){
            return res.status(404).json({ error: 'No category found' });
        } 
        res.json(result)
    } catch(err) {
        console.error(err);
        res.status(500).json({err: 'Couldnt update the category'});
    }   
}
