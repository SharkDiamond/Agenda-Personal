const {Schema,model}=require("mongoose");

const notasSchema= Schema({
   
    Fecha:{

        type:Date,
        require:true

    },
    Titulo:{
        type:String,
        require:true
    },
    Nota:{

        type:String,
        require:true
    
    },
    UsuarioAsignado:{

        type:Schema.Types.ObjectId,
        ref:"Usuario",
        require:true
        
    }

});

module.exports=model("Nota",notasSchema);
