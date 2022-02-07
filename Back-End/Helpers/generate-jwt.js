const jwt=require('jsonwebtoken');

//FUNCION PARA CREAR EL TOKEN
const createToken=(userId)=>{

    return new Promise((resolve,reject)=>{
        //FIRMANDO EL TOKEN
        jwt.sign({userId},"00SDFNXK1235#",{expiresIn:'1h'},(err,token)=>{
            //EN DADO CASO DE QUE HAYA UN ERROR
            if (err) reject(`Ocurrio un problema al intentar generar el token ${err}`);
            //DEVOLVIENDO EL TOKEN SI TODO SALE BIEN
            resolve(token);
            
        })

    });


}

module.exports=createToken;