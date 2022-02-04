

const invalideJWT=(error,navegar)=>{

    //DESESTRUCTURANDO LA DATA
    const {data}=error.response;

    if (data==='JWT no valido'){
        //ELIMINANDO EL NOMBRE DE USUARIO DEL SSESION STORAGE
        sessionStorage.removeItem(sessionStorage.getItem('acceso'));
        //ELIMINANDO EL TOKEN DE ACCESO DE SSESION STORAGE
        sessionStorage.removeItem('acceso');
        //ENVIANDO AL USUARIO A LA PAGINA DE LOGIN
        navegar('/Login');
    
    }



}


export default invalideJWT;