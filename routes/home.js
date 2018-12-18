var express = require('express');
var router = express.Router();

/* GET home page.

709306ff869641d2b43ab576041a0baa

*/
var controller = {
  index:function(req,res,next){
    var context = {
      name:req.session.name,
      title:"Home"
    }
    console.log("USER ",req.session.name)
    res.render('home', context);
  },
}

router.get("/", controller.index); 

module.exports = router;
