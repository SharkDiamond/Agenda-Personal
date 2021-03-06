const {check}=require("express-validator");
const {Router}=require("express");
const { validationExpress } = require("../Helpers/ValidationExpress");
const { createNote, getNotes,getAmounthNotes } = require("../Controllers/Notas");
const verificaToken = require("../Midlewares/verify-jwt");

const route=Router();
//CREAR NOTA
route.post('/CreateNote',[verificaToken,check('Titulo','El titulo no puede venir vacio').not().isEmpty(),check("Nota","el texto no puede venir vacio!").not().isEmpty(),
                           check("Fecha","La fecha tiene que ser un valor de tipo date!").isDate(),
                           validationExpress,
],createNote);
//ELIMINAR NOTA
route.delete('/DeleteNote',[verificaToken,check("id","El id enviado no es valido!").isMongoId(),validationExpress],()=>{});
//ACTUALIZAR NOTA
route.put('/UpdateNote',[verificaToken,check("id","El id enviado no es valido!").isMongoId(),validationExpress],()=>{});
//OBTENER NOTAS
route.post('/getNotes',[verificaToken,check('Fecha','La fecha enviada no es valido!').isDate(),validationExpress],getNotes);

route.get('/AmounthNotes',verificaToken,getAmounthNotes);


module.exports=route;