const Nota=require("../Models/NotasCalendario");

//CREAR NOTAS
const createNote=async(req,res)=>{

    try {

        const {Fecha,Nota,UsuarioAsignado}=req.body;
        
        const date=new Date();
        
        const createN=new Nota({Fecha,Nota,UsuarioAsignado});

        console.log(createN);
        
        await createN.save();

        res.json(`Nota Creada`).end();

    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message).end();

    }



}
//OBTENER NOTAS
const getNotes=async(req,res)=>{

    try {

        const {Fecha,UsuarioAsignado,all}=req.body;
        //SI SE QUIERE BUSCAR TODAS LAS NOTAS O SOLO UNA DETERMINADAS
        const condition= all ? {UsuarioAsignado} : {Fecha,UsuarioAsignado};
        //BUSCANDO LAS NOTAS QUE COINCIDAN CON LA CONDICION INDICADA
        const notas=await Nota.find(condition);
        //EN DADO CASO NO HAYA NOTAS
        if (notas.length==0) return res.json("No hay notas para esa fecha").end();
        
        res.json(notas).end();

    } catch (error) {
        res.status(500).json(error.message).end();
    }



}
//EXPORTANDO LAS FUNCIONES
module.exports={createNote,getNotes};


