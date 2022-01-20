const {Schema,model}=require("mongoose");


const usuarioSchema=new Schema({
    
    nombre:{

        type:String,
        required:[true,"El nombre es requerido!"]

    },
    apellido:{

        type:String,
        required:[true,"El password es requerido!"]

    },
    username:{

        type:String,
        required:[true,"El nombre de usuario es requerido!"]

    },
    password:{

    type:String,
    required:[true,"El password es requerido!"]

    },
    googleAuth:{

        type:Boolean,
        default:false
    }
    
});
//EXPORTANDO EL SCHEMA 
module.exports=model("Usuario",usuarioSchema);