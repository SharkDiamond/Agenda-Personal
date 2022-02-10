//IMPORTACIONES
import React, { useEffect, useState } from 'react';
import invalideJWT from '../../Helpers/JwtInvalid';
import { useNavigate } from 'react-router-dom';
import compromisos from './compromisoContext';
import ipPeticiones from '../../Ip';
import {DateTime} from "luxon";
import axios from 'axios';


export default function CompromisosProvider(props) {
  
    //ESTADOS
    const [compromisosData,setCompromisosData]=useState([]);
    //NAVEGADOR
    const navegador=useNavigate();
    //CICLO DE VIDA DE ACTUALIZACION
    useEffect(async()=>{

        try {
            //SACANDO LA FECHA DEL DIA DE HOY EN FORMATO ISO
            let Fecha=new Date().toISOString().split('T')[0];
            //HACIENDO LA PETICION PARA PEDIR LOS DATOS
            const Peticion=await axios.post(`${ipPeticiones}Note/getNotes`,{ Fecha },  { "headers":{

                "acceso":sessionStorage.getItem('acceso')

                }}

            );
            //SI HAY COMPROMISOS PARA EL DIA ACTUAL
            if (Peticion.data!='No hay notas para esa fecha') setCompromisosData(Peticion.data);
         
        } catch (error) {

            //EN DANDO CASO DE QUE EL TOKEN SEA INVALIDO
            invalideJWT(error,navegador);

        }

    },[]);
    //FUNCION PARA PEDIR LOS DATOS Y ACTUALIZAR EL ESTADO DE COMPROMISOS
    const pedirDatos=async()=>{

        try {
            //SACANDO LA FECHA
            let Fecha=DateTime.now().toString().split('T')[0];
            //
            const Peticion=await axios.post(`${ipPeticiones}Note/getNotes`,{ Fecha }, { "headers":{

                "acceso":sessionStorage.getItem('acceso')

                }
            }

            );
            //SI HAY COMPROMISOS PARA EL DIA ACTUAL
            if (Peticion.data!='No hay notas para esa fecha') setCompromisosData(Peticion.data);

        } catch (error) {
   
            //EN DANDO CASO DE QUE EL TOKEN SEA INVALIDO
            invalideJWT(error,navegador);

    }

    }

  return <compromisos.Provider value={{compromisosData,pedirDatos}}>
  
    {props.children}
  
  </compromisos.Provider>;
}
