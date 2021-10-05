const prdtModel = require('../model/product.js');

exports.getAllProducts = (req, res)=>{

    prdtModel.find()
    .then((products)=> {
        res.json({
            message: `A list of all products`,
            data : products,
            totalProducts : products.length
        })
    })
    .catch(err => {
        res.status(500).json({
            message: err    
        })
    })
   
};

exports.getAProduct = (req, res)=>{

    prdtModel.findById(req.params.id)
    .then((product)=> {
        
        if(product)
        {          
            res.json({
                message: `Product with ID ${req.params.id}`,
                data: product
            })
        }
        else{           
            res.status(404).json({
                message: `There is no product in our database with ID ${req.params.id}`,
                
            })
        }
    })
    .catch(err => {
        
        res.status(500).json({
            message: err    
        })
    })
};

exports.createAProduct = (req, res)=>{

    
    const prdtm = new prdtModel(req.body);

    prdtm.save()
    .then((newProduct) =>{
        res.json({
            message: `Product sucessfully stord in database`,
            data : newProduct
        })
    })
    .catch(err => {
        res.status(500).json({
            message: err
      
        })
    })
};

exports.updateAProduct = (req, res)=>{

    prdtModel.findByIdAndUpdate(req.params.id, req.body, {new : true})
    .then(product => {
        // product is not null
        if(product)
        {
            res.json({
                    message: `The product with ID ${req.params.id} was updated.`,
                    data : product
            })
        }
        // product is null
        else{
            res.status(404).json({
                message: `The product with ID ${req.params.id} was not found.`
        })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: err
      
        })
    })
};

exports.deleteAProduct = (req, res)=>{

    prdtModel.findByIdAndRemove(req.params.id)
    .then(()=> {
        res.json({
            message: `The Product with ID ${req.params.id} deleted.`
        })
    })
    .catch(err => {
        res.status(500).json({
            message: err
      
        })
    })    
};