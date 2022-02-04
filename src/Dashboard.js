import React, { useEffect,useContext } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Calendar from "react-calendar";
import Noticias from './ColumnasComponents/ColumnaLeft/Noticias';
import CompromisosProvider from './Contexto/Compromisos/compromisosProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import usermanage from './Contexto/User/userContext';
import ColumnaCentral from './Columnas/ColumnaCentral';


export default function Dashboard() {

  //USANDO EL CONTEXTO DE USUARIO
  const {usuario}=useContext(usermanage);
  //CICLO DE VIDA DE MONTAJE
  useEffect(()=>{
    //ENVIANDO UNA NOTIFICACION DE BIENVENIEDA
    toast.success('Bienvenido '+usuario);

  },[]);


  return (
<CompromisosProvider>
    <Container className="p-3  bg-dark " fluid={true}>
          {/* FILA BARRA*/}
          <Row className='rounded-top barra '>
    
            <Col className=''><h1 className='text-danger'>Gabriel</h1></Col>
            <Col className=''><h1>Busqueda</h1></Col>
            <Col className=''><h1>Iconos</h1></Col>
    
          </Row> 
    
        {/* FILA CONTENIDO*/}
        <Row className="filaContenido rounded-bottom ">
            {/* PRIMERA COLUMNA DE CONTENIDO  */}
            <Col className=' ' xs="12" md="6" lg="4">
        
            {/* CALENDARIO*/}
            <Col className=' p-3 ' xs lg="12">
            <Calendar className={"react-calendar react-calendar__month-view__days__day--weekend react-calendar__tile"}/>
            </Col>
    
          {/* NOTICIAS*/}
          <Col  className='' xs lg="12">
    
          <Noticias/>
    
          </Col>
    
          
          </Col>
        {/* SEGUNDA COLUMNA DE CONTENIDO  */}
        <ColumnaCentral/>
        {/* TERCERA  COLUMNA DE CONTENIDO  */}
        <Col className='border'><h1 className='text-white'>Columna 3</h1></Col>
    
        </Row>
    
        </Container>

</CompromisosProvider>    
    );
}
