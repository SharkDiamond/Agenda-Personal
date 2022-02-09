import React, { useContext, useEffect } from 'react';
import ipPeticiones from '../../Ip';
import compromisos from '../../Contexto/Compromisos/compromisoContext';
import invalideJWT from '../../Helpers/JwtInvalid';
import { DateTime } from 'luxon'; 
import axios from 'axios';

export default function Shedules() {
    //USANDO EL ESTADO GLOBAL DE LOS COMPROMISOS
    const {compromisosData,pedirDatos}=useContext(compromisos);

    //CICLO DE VIDA DE MONTAJE
    useEffect(async()=>{

      try {

        //SACANDO LA FECHA
        let Fecha=DateTime.now().toString().split('T')[0];
        //HACIENDO LA PETICION DE LAS NOTAS DEL DIA
        const Peticion=await axios.post(`${ipPeticiones}Note/getNotes`,{Fecha},{
          headers: {
            'acceso': sessionStorage.getItem("acceso")
          }});
        //ACTUALIZANDO EL ESTADO DE LOS DATOS
        pedirDatos(Peticion.data);
  
      } catch (error) {
         
      }

    },[]);

  return(<div>

    {
    //RENDERIZADO CONDICIONAL    
    compromisosData.length==0 ? <h4 className='text-danger text-center'>No hay compromisos para el dia hoy</h4> : ""
    }

  </div>) ;

}