var express = require('express');
var router = express.Router();

/* GET home page.

709306ff869641d2b43ab576041a0baa

*/
var controller = {
  index:function(req,res,next){
    var context = {
      img:req.session.img,
      name:req.session.name,
      email:req.session.email,
      id:req.session.id,
      title:"Express"
    }
    res.render('profile', context);
  },
}

router.get("/", controller.index); 

module.exports = router;
