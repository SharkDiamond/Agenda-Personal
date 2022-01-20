const {validationResult}=require("express-validator");



const validationExpress=(req,res,next)=>{
    
    const error= validationResult(req);

    //SI HAY ERRORES
    if (!error.isEmpty()) return res.json(error).status(400).end();

    //SI NO LOS HAY CONTINUA
    next();

}

module.exports={validationExpress};