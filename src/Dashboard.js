import React, { useEffect,useContext} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CompromisosProvider from './Contexto/Compromisos/compromisosProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import usermanage from './Contexto/User/userContext';
import PrimeraFila from './Columnas/PrimeraFila';
import SegundaFila from './Columnas/SegundaFila';


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
    <Container className="p-5  bg-dark " fluid={true}>

        <Row className="filaContenido rounded p-3">
            {/* FILA CONTENIDO 1*/}
              <PrimeraFila/>
            {/* FILA CONTENIDO 2*/}
            <Row>
              <SegundaFila/>
            </Row>
        </Row>
    
        </Container>

</CompromisosProvider>    
    );
}
