const createToken = require("../Helpers/generate-jwt");
const Usuario=require("../Models/Usuarios");

//CREATE NOTE
const createUser=async(req,res)=>{

    try {

        const createUser=new Usuario({nombre:"gabriel",apellido:"arispe","username":"garispe",password:"wwwaaa12"});

        await createUser.save();

        res.json(`Usuario Creado`).end();

    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message).end();

    }



}
//VERIFICAR LA SESION
const session=async=(req,res)=>{

    try {
        //SACANDO EL USUARIO Y EL PASSWORD 
        const {username,password}=req.body;
        //BUSCANDO COINCIDENCIAS
        const UsuarioEncontrado=await Usuario.find({username,password});
        //SI NO SE ENCUENTRA EL USUARIO EN LA BASE DE DATOS
        if (!UsuarioEncontrado) return res.status(400).json(`Password invalido!`).end();
        //GENERANDO EL TOKEN
        const token=await createToken(UsuarioEncontrado._id);
        //ENVIANDO EL TOKEN DE ACCESO
        res.json({username,token}).end();

    } catch (error) {
        res.status(500).json(error.message).end();
    }

}
//EXPORTANDO LAS FUNCIONES
module.exports={createUser,session}