import React,{useEffect,useState} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Noticias from '../ColumnasComponents/ColumnaLeft/Noticias';
import Calendar from 'react-calendar';
import '../App.css';
import FormularioCrearNotas from '../ColumnasComponents/ColumnaLeft/FormularioCrearNotas';
import "../ColumnasComponents/ColumnaLeft/CL.css";
import Shedules from '../ColumnasComponents/ColumnaCenter/Shedules';

export default function PrimeraFila() {
    
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

    return(  <Row >

            {/* CALENDARIO pe-5 ps-4 */}
            <Col className=' ps-4 pt-3   mb-2' xs="12" md="6" lg="6" xl="6">
            <h3 className='text-center mb-3' style={ {color:"#FDEBCD","font-weight": "bold"} }>Calendario</h3>
            {mostrar ? <Calendar  className={"animacionFormulario react-calendar react-calendar__month-view__days__day--weekend react-calendar__tile"}  onChange={(e)=>setfechaElegida(e)} value={fechaElegida}/> 
            : <FormularioCrearNotas Fecha={fechaElegida.toISOString()} Back={backCalendary}/> }
                
            </Col>

            {/* COMPROMISOS*/}
            <Col  className='ps-4  pt-1 pt-md-3  margenNoticias' xs md="6" lg="6" xl="6">
            <h3 className='text-center mb-3 ' style={ {color:"#FDEBCD","font-weight": "bold"} } >Compromisos</h3>
                <Shedules/>
            </Col>

        </Row>
);
       



}