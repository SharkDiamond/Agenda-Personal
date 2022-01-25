const createToken = require("../Helpers/generate-jwt");
const Usuario=require("../Models/Usuarios");
const bcrypt=require("bcrypt");

//CREATE NOTE
const createUser=async(req,res)=>{

    try {
        //SANCANDO LOS DATOS DEL BODY
        const {nombre,apellido,username,password}=req.body;
        //ENCRIPTAR EL PASSWORD
        const saltos=await bcrypt.genSalt(10);
        //ENCRIPTANDO EL PASSWORD
        const passwordEncript=await bcrypt.hash(password,saltos);
        //CREAR EL USUARIO
        const createUser=new Usuario({nombre,apellido,username,"password":passwordEncript});
        //GUARDANDO EL USUARIO
        await createUser.save();
        //RESPONDIENDO
        res.json(`Usuario Creado`).end();

    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message).end();

    }



}
//VERIFICAR LA SESION
const session=async(req,res)=>{

    try {
        //SACANDO EL USUARIO Y EL PASSWORD 
        const {password}=req.body;
        //VERIFICANDO EL PASSWORD
        const passwordCorrect=await bcrypt.compare(password,req.passwordDB);
        //SI EL PASSWORD ES INCORRECTO
        if (!passwordCorrect) return res.status(400).json(`Password invalido!`).end();
        //GENERANDO EL TOKEN
        const token=await createToken(req.id);
        //ENVIANDO EL TOKEN DE ACCESO
        res.json({token}).end();

    } catch (error) {
        res.status(500).json(error.message).end();
    }

}
//EXPORTANDO LAS FUNCIONES
module.exports={createUser,session}