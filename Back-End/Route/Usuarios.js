const {Router}=require("express");
const { createUser } = require("../Controllers/Usuarios");

const route=Router();

route.post('/createUser',[],createUser);


module.exports=route;