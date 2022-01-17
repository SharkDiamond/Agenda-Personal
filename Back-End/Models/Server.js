//IMPORTACIONES
const express=require("express");
const cors=require("cors");
const { createConexionDatabase } = require("../Helpers/ConexionDatabase");


class Server {
    
    //CONSTRUCTOR
    constructor(){

        this.app=express();
        //MIDLEWARES
        this.midlewares();
        //RUTAS
        this.routes();
        //CREANDO LA CONEXION CON LA BASE DE DATOS
        createConexionDatabase();

    }


    midlewares(){

        this.app.use(express.json());

        this.app.use(cors());
        


    }

    routes(){

        this.app.use('/',(req,res)=>{

            res.json("SET").end();
                console.log("LLEGO");


        });


    }

    escucha(){

        this.app.listen(4000,()=>console.log("SERVIDOR EN EL PUERTO 4000"));

    }


}

module.exports=Server;