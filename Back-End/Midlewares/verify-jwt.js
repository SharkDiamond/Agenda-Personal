const jwt=require('jsonwebtoken');
const Usuario=require('../Models/Usuarios');

const verificaToken=async(req,res,next)=>{
    //RECOGIENDO EL TOKEN DE LOS HEADERS
    const tokenPeticion=req.header('acceso');
    //VALIDANDO SI EL TOKEN VIENE
    if (!tokenPeticion) return res.status(400).json("No viene token en la peticion").end();

    try {
        //SACANDO EL ID DE USUARIO DEL TOKEN
        const {userId}= jwt.verify(tokenPeticion,'00SDFNXK1235#');
        //BUSCANDO EL USUARIO CON ESE ID
        const buscaUsuario=await Usuario.findById(userId);
        //PASANDO EN EL REQ EL USERID
        req.userId=userId;
        //INDICANDOLE AL MIDLEWARE QUE SIGA
        next();


    } catch (error) {
        //RESPONDIENDO EN DADO CASO HAYA UN ERROR
        res.status(401).json("JWT no valido").end();

    }


}

module.exports=verificaToken;