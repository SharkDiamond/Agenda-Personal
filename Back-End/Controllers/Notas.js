const Nota=require("../Models/NotasCalendario.js");

//CREAR NOTAS
const createNote=async(req,res)=>{

    try {
        //SACANDO LA DATA DEL BODY
        const {...data}=req.body;
        //CREANDO UNA NUEVA PROPIEDAD
        data.UsuarioAsignado=req.userId;
        //CREANDO LA NOTA
        const createN=new Nota(data);
        //GUARDANDO LA NOTA
        await createN.save();
        //RESPONDIENDO LA NOTA
        res.json(`Nota Creada`).end();

    } catch (error) {
       
        res.status(500).json(error.message).end();

    }



}
//OBTENER NOTAS
const getNotes=async(req,res)=>{

    try {
        
        const {Fecha,all}=req.body;
        //SI SE QUIERE BUSCAR TODAS LAS NOTAS O SOLO UNA DETERMINADAS
        const condition= all ? {UsuarioAsignado:req.userId} : {Fecha,UsuarioAsignado:req.userId};
        //BUSCANDO LAS NOTAS QUE COINCIDAN CON LA CONDICION INDICADA
        const notas=await Nota.find(condition);
        //EN DADO CASO NO HAYA NOTAS
        if (notas.length==0) return res.json("No hay notas para esa fecha").end();
        
        res.json(notas).end();

    } catch (error) {
        
        res.status(500).json(error.message).end();
    }



}

const getAmounthNotes=async(req,res)=>{

    try {
 
        const cantidadHoy=Nota.find({}).count();

        const cantidadMes= Nota.find({}).count();
       
        const cantidadAño= Nota.find({}).count();

        const [today,month,year]=await Promise.all([cantidadHoy,cantidadMes,cantidadAño]);

        res.json({today,month,year}).end();
        
    } catch (error) {
        res.status(500).json(error).end();
    }



}

//EXPORTANDO LAS FUNCIONES
module.exports={createNote,getNotes, getAmounthNotes};


