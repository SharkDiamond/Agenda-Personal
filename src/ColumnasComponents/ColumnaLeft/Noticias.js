import {React,useContext} from 'react';
import { useEffect,useState,useRef } from 'react';
import axios from "axios";
import {Card,Button} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { Container,Nav,Link  } from 'react-bootstrap';
import './CL.css'
import themas from '../../Contexto/Temas.js/ContextThema';

export default function Noticias() {

    //ESTADOS
    const [datosNoticias,setdatosNoticias]=useState([]);
    const [category,setCategory]=useState('Nacionales');
    //REFERENCIAS
    const Titulo=useRef();
    const Menu=useRef();
    //IMPORTANDO EL TEMA DEL ESTADO GLOBAL
    const {tema,setTema}=useContext(themas);
    //CUANDO SE MONTE EL COMPONENTE
    useEffect(async()=>{
      try {
        //HACIENDO LAS PETICIONES DE LAS NOTICIAS MAS IMPORTANTES DE COLOMBIA
        const NewsColombia=await axios.get("https://newsapi.org/v2/top-headlines?country=co&apiKey=cb2f0131b47344ebbc4af40883070deb");
    
        setdatosNoticias(NewsColombia.data.articles);
        
      } catch (error) {
        
      }
       

    },[]);
    //CUANDO SE ACTUALICE EL ESTADO DE CATEGORIA
    useEffect(async()=>{

      try {

      if (category!=='Nacionales') {
        //REALIZANDO LA PETICION
        const Peticion= await axios.get(`https://newsapi.org/v2/top-headlines/?apiKey=cb2f0131b47344ebbc4af40883070deb&sources=${category}`);
        //ACTUALIZANDO EL ESTADO
        setdatosNoticias(Peticion.data.articles);
        //HACIENDO EL RETURN PARA QUE NO SE SIGA EJECUTANDO LA FUNCION
        return;
      }
       //REALIZANDO LA PETICION
       const Peticion= await axios.get(`https://newsapi.org/v2/top-headlines?country=co&apiKey=cb2f0131b47344ebbc4af40883070deb`);
       //ACTUALIZANDO EL ESTADO
       setdatosNoticias(Peticion.data.articles);

      } catch (error) {
          alert(error.message);
      }

    },[category]);
    
   const handleChangeTitle=(e)=>{

        if (e=="Titulo") {

          Menu.current.className="d-none";
      
           Titulo.current.className="text-white"
        }
      
        else if(e=='Menu'){

          Menu.current.className="";
      
          Titulo.current.className="d-none"


        }

    
   }

    return (
        <div  align="center">
              <h1 className='text-white ' ref={Titulo} onMouseEnter={()=>handleChangeTitle('Menu')}>NOTICIAS</h1>

     <div className='d-none' ref={Menu} onMouseOut={()=>handleChangeTitle('Titulo')}>     
<Navbar className='animado'>
    <Container >
    <Nav className="me-auto letraSize" >
    <Nav.Link onClick={e=>setCategory('Nacionales')}  onMouseEnter={()=>handleChangeTitle('Menu')} style={{ color:"blanchedalmond", "font-weight":"bold"}}  href="#home" >Nacionales</Nav.Link>
      <Nav.Link onClick={e=>setCategory('Fortune')}  onMouseEnter={()=>handleChangeTitle('Menu')} style={{ color:"blanchedalmond", "font-weight":"bold"}} href="#home">Economia</Nav.Link>
      <Nav.Link onClick={e=>setCategory('ars-technica')} onMouseEnter={()=>handleChangeTitle('Menu')} style={{ color:"blanchedalmond", "font-weight":"bold"}} href="#features">Tecnologia</Nav.Link>
      <Nav.Link onClick={e=>setCategory('bbc-sport')} onMouseEnter={()=>handleChangeTitle('Menu')} style={{ color:"blanchedalmond", "font-weight":"bold"}} href="#pricing">Deportes</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
     </div>   

            <div className='scroll '>
           {
            datosNoticias.map(element => 
        <Card style={{ width: '100%'}} className='mb-2 prueba '>
        <Card.Img variant="top" src={element.urlToImage} />
        <Card.Body className={tema}>
          <Card.Title>{element.title}</Card.Title>
          <Card.Text>{element.description}</Card.Text>
          <Button variant="primary" href={element.url} target="_blank">Leer Mas</Button>
          <Button onClick={()=>setTema("bg-danger ")}>CHANGE</Button>
        </Card.Body>
      </Card>
      
             )
          } 
</div>


        </div>
    )
}
