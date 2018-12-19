var express = require('express');
var router = express.Router();
var auth = require("../middleware/auth");
var news = require("../model/news/backend-news");


var controller = {
  index:function(req,res,next){
    var context = {
      name:req.session.name,
      key:"AIzaSyD02_KFAgFxo2LKH9eALv3x1cJUTbPs_tI",
      id:"926143549779",
      user:(req.session.email).split("@")[0],
    }
    res.render('favorite', context);
  },

}

router.get("/",auth.isAuth, controller.index); 

module.exports = router;
