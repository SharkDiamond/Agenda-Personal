const {Router}=require("express");
const { createUser, session } = require("../Controllers/Usuarios");
const {check}=require("express-validator");
const { validationExpress } = require("../Helpers/ValidationExpress");
const { userExist } = require("../Helpers/User");
const verificaToken = require("../Midlewares/verify-jwt");
const { noUserExist } = require("../Midlewares/Users");

const route=Router();
//PARA CREAR EL USUARIOS
route.post('/createUser',[verificaToken,
check('nombre','El nombre no puede venir vacio').not().isEmpty(),
check('apellido','El apellido no puede venir vacio').not().isEmpty(),
check('username','El username no puede venir vacio').not().isEmpty(),
check('password','El password no puede venir vacio').not().isEmpty(),
check('username').custom(userExist),validationExpress],createUser);
//PARA VALIDAR INICIOS DE SESION
route.post('/validate',[noUserExist,check("username","El usuario es requerido!").not().isEmpty(),
check("password","El password es requerido!").not().isEmpty(),validationExpress],session);


module.exports=route;