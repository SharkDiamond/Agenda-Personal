import React, { useContext, useEffect } from 'react';
import ipPeticiones from '../../Ip';
import compromisos from '../../Contexto/Compromisos/compromisoContext';
import invalideJWT from '../../Helpers/JwtInvalid';
import { DateTime } from 'luxon'; 
import { Accordion } from 'react-bootstrap';
import axios from 'axios';

export default function Shedules() {
    //USANDO EL ESTADO GLOBAL DE LOS COMPROMISOS
    const {compromisosData,pedirDatos}=useContext(compromisos);

    //CICLO DE VIDA DE MONTAJE
    useEffect(async()=>{

      try {

        //HACIENDO LA PETICION DE LAS NOTAS DEL DIA
        pedirDatos();

      } catch (error) {

      }

    },[]);

  return(<div>
<Accordion defaultActiveKey="0">
    {
    //RENDERIZADO CONDICIONAL    
    compromisosData.length==0 ? <h4 className='text-danger text-center'>No hay compromisos para el dia hoy</h4> : compromisosData.map((element,index)=>{
      return (
      <Accordion.Item eventKey={index} className='mb-2' alwaysOpen>

      <Accordion.Header className='text-center'>Nota {index+1}</Accordion.Header>
        <Accordion.Body >
          {element.Nota}
        </Accordion.Body>
    </Accordion.Item>

    )
    })
    }





  <br/>

</Accordion>




  </div>) ;

}