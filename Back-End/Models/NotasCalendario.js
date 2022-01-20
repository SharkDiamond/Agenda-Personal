const {Schema,model}=require("mongoose");

const notasSchema=new Schema({
   
    Fecha:{

        type:Date,
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
