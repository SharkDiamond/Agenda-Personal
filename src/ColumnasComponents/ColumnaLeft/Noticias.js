import React from 'react';
import { useEffect,useState } from 'react';
import axios from "axios";
import {Card,Button} from "react-bootstrap";
export default function Noticias() {

    //ESTADOS
    const [datosNoticias,setdatosNoticias]=useState([]);
    const [category,setCategory]=useState();
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





    },[category]);

    return (
        <div  align="center">
              <h1 className='text-white '>NOTICIAS</h1>

            <div className='scroll'>
           {
    datosNoticias.map(element => 
        <Card style={{ width: '100%'}} className='mb-2 prueba'>
        <Card.Img variant="top" src={element.urlToImage} />
        <Card.Body>
          <Card.Title>{element.title}</Card.Title>
          <Card.Text>{element.description}</Card.Text>
          <Button variant="primary" href={element.url} target="_blank">Leer Mas</Button>
        </Card.Body>
      </Card>
      
    )
} 
</div>


        </div>
    )
}
