import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ipPeticiones from '../../Ip';
import {useNavigate} from "react-router-dom";
export default function Shedules() {

    //ESTADOS
    const [compromisos,setCompromisos]=useState([]);
    //NAVEGADOR
    const navegador=useNavigate();

    //CICLO DE VIDA DE MONTAJE
    useEffect(async()=>{

        try {
            
            let Fecha=new Date().toISOString().split('T')[0];
            
            const Peticion=await axios.post(`${ipPeticiones}Note/getNotes`,{

                Fecha
                
            },  { "headers":{

                "acceso":sessionStorage.getItem('acceso')

                }}
            
          
            );

            

        } catch (error) {
            //EN DADO CASO SE VENCE EL JWT 
            if (error.message=='JWT no valido'){
                //ELIMINANDO EL NOMBRE DE USUARIO DEL SSESION STORAGE
                sessionStorage.removeItem(sessionStorage.getItem('acceso'));
                //ELIMINANDO EL TOKEN DE ACCESO DE SSESION STORAGE
                sessionStorage.removeItem('acceso');
                //ENVIANDO AL USUARIO A LA PAGINA DE LOGIN
                return navegador('/Login');
            } 

            console.log(error.response.data);
        }

    },[]);



  return(<div>


    {compromisos.length==0 ? <h4 className='text-danger'>No hay compromisos para el dia hoy</h4> : ""}


  </div>) ;
}
