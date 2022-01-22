const Usuario=require("../Models/Usuarios");

const userExist=async(username)=>{
    //BUSCANDO UN USUARIO CON ESE USERNAME
    const userFind=await Usuario.findOne({username});
    //EN DADO CASO DE QUE NO SE ENCUENTRE
    if (!userFind) throw new Error(`No existe el usuario ${userFind}`);

}

module.exports={userExist};
