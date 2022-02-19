import React, { useState,useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import ipPeticiones from '../../Ip';
import { toast } from 'react-toastify';
import { DateTime } from 'luxon';
import compromisos from '../../Contexto/Compromisos/compromisoContext';
import './CL.css'

export default function FormularioCrearNotas({Fecha,Back}) {

    //ESTADOS
    const [Nota,setNota]=useState('');
    const [Titulo,setTitulo]=useState('');
    //PARA ACTUALIZAR LA LISTA DE USUARIOS
    const {pedirDatos}=useContext(compromisos);

    const createNota=async(e)=>{
    //EVITANDO QUE SE RENDERICE LA PAGINA
    e.preventDefault();

    try {
        Fecha=Fecha.toString().split('T')[0];
        //SACANDO LA FECHA
        let fechaHoy=DateTime.now().toString().split('T')[0];
        //HACIENDO LA PETICION
        const Peticion= await axios.post(`${ipPeticiones}Note/CreateNote`,{
            Titulo,
            Nota,
            Fecha,
            all:false

        },{

            headers:{

                acceso:sessionStorage.getItem('acceso')

            }

        });
       
        toast.success(Peticion.data);
        //PIDIENDO LA LISTA DE NOTAS EN DADO CASO LA NOTA NUEVA SE CREO EN LA MISMA FECHA DE HOY
        if (fechaHoy==Fecha) await pedirDatos();
       
    } catch (error) {
        
        console.log(error.message);

    }



   }


  return <Form className='text-center animacionFormulario'>
   
    <Form.Group>
  
        <h4 className=' text-white mb-3'>{Fecha}</h4>
        <h4 className='mb-3'>Titulo</h4>
        <Form.Control  type="field" rows={9} onChange={e=>setTitulo(e.target.value)} value={Titulo} required/>
        <h4 className='mb-3 mt-2'>Comentario</h4>
        <Form.Control  as="textarea" rows={9} onChange={e=>setNota(e.target.value)} value={Nota} required/>
         
        <Button type="submit"  onClick={createNota}    className='text-center mt-3 ' align='center' variant='success' >Crear Nota </Button >
        
        <Button type="button" onClick={Back} className='text-center ms-2 mt-3' align='center' variant='danger' >Volver </Button >

    </Form.Group>
  
  </Form>;


}
