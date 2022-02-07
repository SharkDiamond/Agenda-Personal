import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import ipPeticiones from '../../Ip';
import { toast } from 'react-toastify';
import './CL.css'

export default function FormularioCrearNotas({Fecha,Back}) {

    //ESTADOS
    const [Nota,setNota]=useState('');

   const createNota=async(e)=>{
    //EVITANDO QUE SE RENDERICE LA PAGINA
    e.preventDefault();

    try {
        
        //HACIENDO LA PETICION
        const Peticion= await axios.post(`${ipPeticiones}Note/CreateNote`,{

            Nota,
            Fecha:Fecha.split('T')[0]

        },{

            headers:{

                acceso:sessionStorage.getItem('acceso')

            }

        });

        toast.success(Peticion.data);

    } catch (error) {
        
        console.log(error.message);


    }



   }


  return <Form className='text-center animacionFormulario'>
   
    <Form.Group>

        <h4 className=' text-white mb-3'>{Fecha}</h4>

        <Form.Control  as="textarea" rows={9} onChange={e=>setNota(e.target.value)} value={Nota} required/>
         
        <Button type="submit"  onClick={createNota}    className='text-center mt-3 ' align='center' variant='success' >Crear Nota </Button >
        
        <Button type="button" onClick={Back} className='text-center ms-2 mt-3' align='center' variant='danger' >Volver </Button >

    </Form.Group>
  
  </Form>;


}
