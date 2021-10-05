var express = require('express')
var router = express.Router()

const customerService = require('../services/customerService.js');

router.get("", customerService.getAllCustomers);

router.get("/:id", customerService.getACustomer);

router.post("", customerService.createACustomer);

module.exports = router