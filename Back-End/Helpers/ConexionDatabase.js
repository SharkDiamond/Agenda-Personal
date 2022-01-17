const mongo=require("mongoose");


const createConexionDatabase=async()=>{

    try {
        //REALIZANDO LA CONEXION CON MONGO
        await mongo.connect("mongodb+srv://Agenda:GXOvHsy66Z8MXOLf@cluster0.8kyiy.mongodb.net/agendaPersonal?retryWrites=true&w=majority",{

            useNewUrlParser:true,
            useUnifiedTopology:true

        });
        //IMPRIMIENDO EN CONSOLA QUE SE LOGRO CONECTAR
        console.log("Base De Datos Conectada");

    } catch (error) {
        
        console.log(error.message);

    }

}

module.exports={createConexionDatabase};
