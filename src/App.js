
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from "react-calendar";
import Noticias from './ColumnasComponents/ColumnaLeft/Noticias';
import ThemaState from './Contexto/Temas.js/ThemaState';

function App() {


  return (

    <ThemaState>
   
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
    <Col className="p-4 border"  xs="12" md="6" lg="4"><h1 className='text-white'>Columna 2</h1></Col>
    {/* TERCERA  COLUMNA DE CONTENIDO  */}
    <Col className='border'><h1 className='text-white'>Columna 3</h1></Col>

    </Row>

    </Container>

    </ThemaState>
  );
}

export default App;
