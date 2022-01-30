//IMPORTACIONES
import React,{useRef,useState} from 'react';
import usermanage from './userContext';

export default function Userprovider(props) {
  
  
  const usernameUnico=useRef();

  let tokens=sessionStorage.getItem('acceso');

  const [usuario,setUsuario]=useState(null || sessionStorage.getItem(tokens));
  
    //MANAGE DATA USER
    const valueUser={

        login:(user,token,userUnc)=>{
            
          usernameUnico.current=userUnc;
            //GUARDANDO EL TOKEN EN EL SESION STORAGE
            sessionStorage.setItem('acceso',token);
            //ACTUALIZANDO EL ESTADO DEL USUARIO

            sessionStorage.setItem(""+usernameUnico.current,user);

            setUsuario(user);



        },
        logout:()=>{

          setUsuario(null);

        },
       usuario

    }

  return (
  <usermanage.Provider value={valueUser}>

    {props.children}

  </usermanage.Provider>);
}
