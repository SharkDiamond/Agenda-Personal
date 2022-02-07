import {React,useEffect,useState} from 'react';
import Col from "react-bootstrap/Col";
import Noticias from '../ColumnasComponents/ColumnaLeft/Noticias';
import Calendar from 'react-calendar';
import '../App.css';
import FormularioCrearNotas from '../ColumnasComponents/ColumnaLeft/FormularioCrearNotas';
import "../ColumnasComponents/ColumnaLeft/CL.css";

export default function ColumnaIzquierda() {
    
    //ESTADOS 
    const [fechaElegida,setfechaElegida]=useState(new Date());
    const [mostrar,setMostrar]=useState(true);
    const  [contador,setContador]=useState(0);

    //CICLO DE VIDA DE ACTUALIZACION PARA EL VALOR DE LA FECHA
    useEffect(()=>{

        //IGUALANDO EL VALOR DE CONTADOR AL ESTADO
        let contadorActual=contador;
        //SUMANDOLE 1 A ESE VALOR
        contadorActual=contadorActual+1;
        //EN DADO CASO DE QUE EL CONTADOR SEA DISTINTI DE 1 SE MUESTRA EL FORMULARIO
        if (contadorActual!==1) setMostrar(false);
        //SE LE ASIGNA EL VALOR DEL FORMULARIO ACTUAL AL CONTADOR ESTADO
        setContador(contadorActual);

      },[fechaElegida]);

    //PARA MODIFICAR EL ESTADO DE MOSTRAR EL CALENDARIO DESDE OTRO COMPONENTE
    const backCalendary=()=>{

        setMostrar(true);

    }


    return  <Col className=' ' xs="12" md="6" lg="4">

            {/* CALENDARIO*/}
            <Col className=' p-3 ' xs lg="12">

            {mostrar ? <Calendar  className={"animacionFormulario react-calendar react-calendar__month-view__days__day--weekend react-calendar__tile"}  onChange={(e)=>setfechaElegida(e)} value={fechaElegida}/> 
            : <FormularioCrearNotas Fecha={fechaElegida.toISOString()} Back={backCalendary}/> }
                
            </Col>
    
            {/* NOTICIAS*/}
            <Col  className='' xs lg="12">
                <Noticias/>
            </Col>

        </Col>;



}
