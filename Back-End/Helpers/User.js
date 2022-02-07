const Usuario=require("../Models/Usuarios");

const userExist=async(username)=>{
    //BUSCANDO EL USUARIO
    const user=await Usuario.findOne({username});
    //SI EL USUARIO EXISTE
    if (user) throw new Error(`Ya existe un usuario con el usuario ${username}`);

}


const userForUsernameGet=async(username)=>{

    const user=await Usuario.findOne({username});

    return user;

}



module.exports={userExist,userForUsernameGet};
