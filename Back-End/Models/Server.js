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
        //RUTA PARA LAS NOTAS
        this.app.use('/Note',require('../Route/Notas'));
        //RUTA PARA LOS USUARIOS
        this.app.use('/User',require("../Route/Usuarios"));

    }

    escucha(){

        this.app.listen(4000,()=>console.log("SERVIDOR EN EL PUERTO 4000"));

    }


}

module.exports=Server;