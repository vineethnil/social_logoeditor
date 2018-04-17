const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');

// var emailHTML='<div style="margin:0;padding:0;width:100%!important;text-align: center;""><div style="background: #000;color:#fff;margin: 0 auto;max-width: 650px;"><img style="width: 100%;height: auto;padding:20px 10px;" src="https://socialbox.co/bundles/socialboxapp/images/favicon/final3.png">><div style="padding:50px 10px;background: #000000;text-align: center;"><p style="padding:50px 10px;">Thanks for using Social! Please confirm your email address by clicking below. We'll communicate with you from time to time via email so it's important that we have an up-to-date email address on file.</p><a href="http://socialbox.co/" style="width:auto;height:50px;border-radius:4px;background-color:#37b38b;color:white;display:inline-block;line-height:50px;text-decoration: none;text-transform: uppercase;font-size:16px;font-weight:bold;text-align:center;color:#ffffff" target="_blank">CONFIRM</a></div></div>';

//Handle incoming GET request for /emails
router.post('/',(req,res,next) =>{
	const email=req.body.email
	console.log(req.body.email);
	var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
	    user: 'vineeth@socialbox.co',
	    pass: 'arangote'
	  }
	});
	var mailOptions = {
	  from: 'vineeth@socialbox.co,',
	  to: email,
	  subject: 'Please verify your mail',
	  // text: 'That was easy!'
	  html: '<div style="margin:0;padding:0;width:100%!important"><table border="0" cellpadding="0" cellspacing="0" style="margin:0;padding:0;padding-top: 50px;padding-bottom: 50px;" width="100%"><tbody><tr><td align="center" valign="top" style="border-collapse:collapse"><table width="640" border="0" cellspacing="0" cellpadding="0"><tbody bgcolor="#fff"><tr><td><table border="0" cellpadding="0" cellspacing="0" style="border:none;border-spacing:0;max-width:700px;width:100%"><tbody><tr><td bgcolor="#000000" align="center" height="100"><img src="https://socialbox.co/bundles/socialboxapp/images/favicon/final3.png" alt="Logo" border="0" style="max-width: 200px;width: 100%; height: auto;"></td></tr></tbody></table><table width="100%" border="0" cellpadding="20" cellspacing="0" style="border:0;border-collapse:collapse;border-spacing:0"><tbody><tr><td align="left"><br><br><h1 align="center">CONFIRM MAIL</h1><span>Thanks for using Social! Please confirm your email address by clicking below. Well communicate with you from time to time via email so it is important that we have an up-to-date email address on file.</span><br><br></td></tr><tr><td align="left"><table border="0" cellspacing="0" cellpadding="0" style="width:100%!important;margin-bottom:30px"><tbody><tr><td align="center   " style="border-collapse:collapse"><a href="http://localhost/crowd/social_canvas/logoadd.html?email='+email+'" style="width:350px;height:50px;border-radius:4px;background-color:#000000;color:white;display:inline-block;line-height:50px;text-decoration: none;text-transform: uppercase;font-size:16px;font-weight:bold;text-align:center;color:#ffffff" target="_blank">CONFIRM</a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>'
	};
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
        res.json({
        	yo: 'error',
        	error:error
        });
	  } else {
	    console.log('Message sent: ' + info.response);
        res.json({
        	yo: info.response,
        	req:req.params,
        	id:req.body.email
        });
	  }
	});
});


module.exports=router;