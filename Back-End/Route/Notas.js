const {check}=require("express-validator");
const {Router}=require("express");
const { validationExpress } = require("../Helpers/ValidationExpress");
const { createNote, getNotes } = require("../Controllers/Notas");

const route=Router();
// check("User").custom(),
//CREAR NOTA
route.post('/CreateNote',[check("texto","el texto no puede venir vacio!").not().isEmpty(),
                           check("Fecha","La fecha tiene que ser un valor de tipo date!").isDate(),
                           validationExpress,
],createNote);
//ELIMINAR NOTA
route.delete('/DeleteNote',[check("User").custom(),check("id","El id enviado no es valido!").isMongoId(),validationExpress],()=>{});
//ACTUALIZAR NOTA
route.put('/UpdateNote',[check('User').custom(),check("id","El id enviado no es valido!").isMongoId(),validationExpress],()=>{});
//OBTENER NOTAS
route.get('/getNotes',[check('Fecha','La fecha enviada no es valido!').isDate(),validationExpress],getNotes);


module.exports=route;