// =========== VERIFICAR SI TIENE SESION ABIERTA
function isUser(req,res,next){
    var user = req.session.id;
    if(user){
          res.redirect('/home');
    }else{
        next();
    }
}

function isAuth(req,res,next){
    var user = req.session.id;
    console.log("ACCOUNT",user)
    if(user == null || user == undefined){
        res.redirect('/');
    }else{
        return next();
    }
}

module.exports = {
    isAuth:isAuth,
    isUser:isUser, 
};

