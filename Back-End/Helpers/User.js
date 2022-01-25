const Usuario=require("../Models/Usuarios");

const userExist=async(username)=>{
    //BUSCANDO EL USUARIO
    const user=await Usuario.findOne({username});
    //SI EL USUARIO EXISTE
    if (user) throw new Error(`Ya existe un usuario con el usuario ${username}`);

}

module.exports={userExist};
