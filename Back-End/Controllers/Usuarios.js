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


module.exports={createUser}