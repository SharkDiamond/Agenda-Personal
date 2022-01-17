const {Schema,model}=require("mongoose");

const notasSchema=Schema({

    Fecha:{

        type:Date,
        require:true

    },
    Nota:{

        type:String,
        require:true
    
    },
    UsuarioAsignado:{

        ref:"Usuario",
        type:Schema.Types.ObjectId,
        require:true

    }

});

module.exports=model("Nota",notasSchema);
