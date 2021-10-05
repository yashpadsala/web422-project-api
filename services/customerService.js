const custModel = require('../model/customer.js');

exports.createACustomer = (req, res)=>{
    const custm = new custModel(req.body);

    custm.save()
    .then((newCustomer) =>{
        res.json({
            message: `Customer sucessfully stord in database`,
            data : newCustomer
        })
    })
    .catch(err => {
        res.status(500).json({
            message: err
      
        })
    })
};

exports.getAllCustomers = (req, res)=>{

    custModel.find()
    .then((customers)=> {
        res.json({
            message: `A list of all customers`,
            data : customers,
            totalCustomers : customers.length
        })
    })
    .catch(err => {
        res.status(500).json({
            message: err    
        })
    })
};

exports.getACustomer = (req, res)=>{

    custModel.findById(req.params.id)
    .then((customer)=> {
        
        if(customer)
        {          
            res.json({
                message: `Customer with ID ${req.params.id}`,
                data: customer
            })
        }
        else{           
            res.status(404).json({
                message: `There is no customer in our database with ID ${req.params.id}`,
                
            })
        }
    })
    .catch(err => {
        
        res.status(500).json({
            message: err    
        })
    })
};