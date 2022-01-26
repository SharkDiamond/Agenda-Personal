
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from "react-calendar";
import ThemaState from './Contexto/Temas.js/ThemaState';
import React from 'react';
import Noticias from "./ColumnasComponents/ColumnaLeft/Noticias";
import Enrutador from './Rutas/Routes';
import Userprovider from './Contexto/User/userProvider';
function App() {


  return (

    <Userprovider>
   
      <Enrutador/>
  
    </Userprovider>
  );
}

export default App;
