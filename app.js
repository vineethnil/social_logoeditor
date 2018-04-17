const express = require('express');
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose =require("mongoose");

// mongoose.connect('mongodb+srv://chalisample:'+process.env.MONGO_ATLAS_PW+'@chalisample-tmuyj.mongodb.net/test');	
mongoose.connect('mongodb://chalisample:chalisample@chalisample-shard-00-00-tmuyj.mongodb.net:27017,chalisample-shard-00-01-tmuyj.mongodb.net:27017,chalisample-shard-00-02-tmuyj.mongodb.net:27017/test?ssl=true&replicaSet=chaliSample-shard-0&authSource=admin',
{
	useMongoClient: true
});


const productRoutes= require('./api/routes/products');
const orderRoutes= require('./api/routes/orders');
const emailRoutes= require('./api/routes/emails');

app.use(morgan("dev"));
// parser for rquest paramenters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/// handle cross orgin 
app.use((req,res,next)=>{
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	if (req.method === 'OPTIONS') {
	  res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
	  return res.status(200).json({});
	}
	next()
})

/// routing middleware
// routing which should handle request
app.use('/products',productRoutes);
app.use('/orders',orderRoutes);
app.use('/emails',emailRoutes);

// to handle error is request doest not have specified route
app.use((req,res,next)=>{
	const error = new Error('not forund');
	error.status=404;
	next(error);
});

//to handle error thrown by some function
app.use((error, req, res, next)=>{
	res.status(error.status || 500);
	res.json({
		error:{
			message:error.message
		}
	});
})

module.exports = app;