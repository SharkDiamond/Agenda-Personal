import React, { useEffect,useContext} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CompromisosProvider from './Contexto/Compromisos/compromisosProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import usermanage from './Contexto/User/userContext';
import ColumnaCentral from './Columnas/ColumnaCentral';
import ColumnaIzquierda from './Columnas/ColumnaIzquierda';

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
        <ColumnaIzquierda/>
        {/* SEGUNDA COLUMNA DE CONTENIDO  */}
        <ColumnaCentral/>
        {/* TERCERA  COLUMNA DE CONTENIDO  */}
        <Col className='border'><h1 className='text-white'>Columna 3</h1></Col>
    
        </Row>
    
        </Container>

</CompromisosProvider>    
    );
}
