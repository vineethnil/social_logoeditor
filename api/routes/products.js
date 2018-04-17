const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');

const Product = require("../models/product");

//Handle incoming GET request for /products
router.get('/',(req,res,next) =>{
	res.status(200).json({
		message:'handle get'
	});
});

//Handle incoming POST request for /products
router.post('/',(req,res,next) =>{
    const product = new Product({
    	_id: new mongoose.Types.ObjectId(),
    	name: req.body.name,
        price: req.body.price
    });
    product
    .save()
    .then(result=>{
    	console.log(result);
    })
    .catch(err=>{
    	console.log(err);
    })
	res.status(201).json({
		message:'handle post',
		createdProducts: product
	});
});

//Handle incoming GET request for /products/id
router.get('/:productId',(req,res,next) =>{
	const id=req.params.productId;
	res.status(200).json({
		message:id+'get'
	});
});

//Handle incoming PATCH request for /products/id
router.patch('/:productId',(req,res,next) =>{
	const id=req.params.productId;
	res.status(200).json({
		message:id+'patch'
	});
});

//Handle incoming DELETE request for /products/id
router.delete('/:productId',(req,res,next) =>{
	const id=req.params.productId;
	res.status(200).json({
		message:id+'delet'
	});
});

module.exports=router;