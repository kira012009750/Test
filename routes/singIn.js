var express = require('express');
var router = express.Router();


var controller = {

  index:function(req,res,next){
    //SAVE THIS USER IN SESSION STORAGE
    console.log("USER SAVED =",req.body);
    req.session.id = req.body.userId;
    req.session.name = req.body.name;
    req.session.email = req.body.email;
    req.session.img = req.body.img;

    //SEND A CLIENT RESPONSE THAT EVERYTHING IS OK THE CLIENT WILL REDIRECT TO OTHER ROUT
    res.status(200).send({status:200,msn:"User created succesfully",user:req.session})
  },
}

router.post("/", controller.index); 

module.exports = router;
