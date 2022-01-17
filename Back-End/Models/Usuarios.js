const {Schema,model}=require("mongoose");


const usuarioSchema=Schema({

    nombre:{

        type:String,
        required:true

    },

    apellido:{

        type:String,
        required:true

    },

    googleAuth:{

        type:Boolean,
        default:false
    },

    notas:{

        ref:"notascalendario",
        type:Schema.Types.ObjectId


    }

});
//EXPORTANDO EL SCHEMA 
module.exports=model("Usuario",usuarioSchema);