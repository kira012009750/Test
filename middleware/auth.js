// =========== VERIFICAR SI TIENE SESION ABIERTA
function isAuth(req,res,next){
    var user = req.session.email;
    console.log("ACCOUNT USER ID = ",user)
    if(user == null || user == undefined){
        res.redirect('/');
    }else{
        return next();
    }
}

module.exports = {
    isAuth:isAuth,
};

