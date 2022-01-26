import React,{useState,useContext} from 'react';
import usermanage from './userContext';


export default function Userprovider(props) {
  //const UM=useContext(UserManage);
   const [usuario,setUsuario]=useState(null);
    //MANAGE DATA USER
    const valueUser={

        login:(user,token)=>{
            //GUARDANDO EL TOKEN EN EL SESION STORAGE
            sessionStorage.setItem('acceso',token);
            //ACTUALIZANDO EL ESTADO DEL USUARIO
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
