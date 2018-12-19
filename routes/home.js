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
    res.render('home', context);
  },

  all:function(req,res,next){ //---GET ALL NEWS 
    news.all(function(response){
      res.status(response.status).send(response);
    });
  },

  allUsa:function(req,res,next){
    news.allUsa(function(response){
      res.status(response.status).send(response);
    });
  },

  categories:function(req,res,next){ //---GET ALL CATEGORIES
    news.sources(function(response){
      res.status(response.status).send(response);
    });
  },

  source:function(req,res,next){
    news.findBySource(req.body,function(response){
      res.status(response.status).send(response);
    });
  },

  keyword:function(req,res,next){
    news.findByKeyWord(req.body,function(response){
      res.status(response.status).send(response);
    });
  }
}

router.get("/",auth.isAuth, controller.index); 
router.get("/all",auth.isAuth, controller.all); 
router.get("/allUsa",auth.isAuth, controller.allUsa); 
router.get("/categories",auth.isAuth, controller.categories); 
router.post("/source",auth.isAuth, controller.source); 
router.post("/keyword",auth.isAuth, controller.keyword); 

module.exports = router;
