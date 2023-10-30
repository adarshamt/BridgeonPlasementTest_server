const products = require("../model/productSchema");


const showProducts =async(req,res)=>{

    const items = await products.find()
    
    res.json({
        message:'success',
        data:items
    })


}
const viewProduct = async(req,res)=>{

    const id = req.params.id;
    try {
  
        const product = await products.findById(id)

        res.json({
            message :'success',
            product
        })
        
    } catch (error) {
        
        res.status(404).json({
            message:'product not found'
        })
    }

}


module.exports = {
    showProducts,viewProduct}