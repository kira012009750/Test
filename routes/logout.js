var express = require('express');
var router = express.Router();

var controller = {
  logOut:function(req,res,next){
    req.session = null;
    res.redirect('/');
  }
}

router.get("/", controller.logOut); 

module.exports = router;
