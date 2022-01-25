const Usuario=require("../Models/Usuarios");


const noUserExist=async(req,res,next)=>{
    
    //BUSCANDO UN USUARIO CON ESE USERNAME
    const {username}=req.body;
    //BUSCANDO EL USUARIO
    const userFind=await Usuario.findOne({username});
    //EN DADO CASO DE QUE NO SE ENCUENTRE
    if (!userFind) return res.status(400).json(`No existe el usuario ${username}`).end();
    //PASANDO EL ENCRIPTADO
    req.passwordDB=userFind.password;
    //PASANDO EL ID
    req.id=userFind._id;
    //DANDOLE SIGUIENTE
    next();

}


module.exports={noUserExist};