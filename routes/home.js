var express = require('express');
var router = express.Router();
var auth = require("../middleware/auth");
var news = require("../model/news/backend-news");


var controller = {
  index:function(req,res,next){
    var context = {
      name:req.session.name,
      title:"Home"
    }
    news.list(function(response){
      context.news = response.news;
      context.newsJS = JSON.stringify(response.news);
      res.render('home', context);
    })
    
  },
}

router.get("/",auth.isAuth, controller.index); 

module.exports = router;
