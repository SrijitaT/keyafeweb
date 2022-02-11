const express = require("express");
const router = express.Router();
const stripe = require("stripe")("pk_test_51IjrO8SGjWpsMg4jO96ZD9Wbsvprpg81tMGH6av6dRT4irE08yuoYcMliJX6hVHbVa0o5rgU7FjLxl4Og9CHi21Q00cyCfNWPS");

router.get('/', function (req, res, next) {
    const {product,token} = req.body;
    console.log("product----",product);
    const idempotencyKey = uuid();
    return stripe.customers
    .create({
      email: token.email,
      source : token.id 
    }).then((customer)=>{
        stripe.charges.create({
            amount : product.price,
            currency : 'INR',
            customer: customer.id,
            receipt_email: token.email,
            description: product.name
        },{idempotencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
}) 

module.exports = router;