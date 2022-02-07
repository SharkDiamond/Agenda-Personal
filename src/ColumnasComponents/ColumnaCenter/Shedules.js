import React, { useContext } from 'react';
import ipPeticiones from '../../Ip';
import compromisos from '../../Contexto/Compromisos/compromisoContext';

export default function Shedules() {
    //USANDO EL ESTADO GLOBAL DE LOS COMPROMISOS
    const {compromisosData,pedirDatos}=useContext(compromisos);

  return(<div>


    {
    //RENDERIZADO CONDICIONAL    
    compromisosData.length==0 ? <h4 className='text-danger text-center'>No hay compromisos para el dia hoy</h4> : ""
    
    }


  </div>) ;

}