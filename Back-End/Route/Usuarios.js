const {Router}=require("express");
const { createUser, session } = require("../Controllers/Usuarios");
const {check}=require("express-validator");
const { validationExpress } = require("../Helpers/ValidationExpress");
const { userExist } = require("../Helpers/User");
const route=Router();
//PARA CREAR EL USUARIOS
route.post('/createUser',[],createUser);
//PARA VALIDAR INICIOS DE SESION
route.post('/validate',[check("username","El usuario es requerido!").not().isEmpty(),
check("password","El password es requerido!").not().isEmpty(),
check("username").custom(userExist),validationExpress],session);


module.exports=route;