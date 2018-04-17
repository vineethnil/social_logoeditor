const express = require('express');
const router = express.Router();

//Handle incoming GET request for /orders
router.get('/',(req,res,next) =>{
	res.status(200).json({
		message:'handle get'
	});
});

//Handle incoming POST request for /orders
router.post('/',(req,res,next) =>{
	const order={
		productId:req.body.productId,
		quantity:req.body.quantity
	}
	res.status(201).json({
		message:'handle post',
		id:req.body.productId,
		order:order
	});
});

//Handle incoming GET request for /orders/id
router.get('/:orderId',(req,res,next) =>{
	const id=req.params.orderId;
	res.status(200).json({
		message:id+'get'
	});
});

//Handle incoming PATCH request for /orders/id
router.patch('/:orderId',(req,res,next) =>{
	const id=req.params.orderId;
	res.status(200).json({
		message:id+'patch'
	});
});

//Handle incoming DELETE request for /orders/id
router.delete('/:orderId',(req,res,next) =>{
	const id=req.params.orderId;
	res.status(200).json({
		message:id+'delet'
	});
});

module.exports=router;