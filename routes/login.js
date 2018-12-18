var express = require('express');
var router = express.Router();

/* GET home page.

709306ff869641d2b43ab576041a0baa

*/
var controller = {
  index:function(req,res,next){
    var context = {
      title:"Brounie",
      key:"AIzaSyD02_KFAgFxo2LKH9eALv3x1cJUTbPs_tI",
      id:"926143549779",
    }
    res.render('index', context);
  },
}

router.get("/", controller.index); 

module.exports = router;
