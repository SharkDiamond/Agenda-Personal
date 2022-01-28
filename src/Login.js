//IMPORTACIONES
import React, { useContext, useState } from 'react';
import {Container,Row,Col,Form } from "react-bootstrap";
import usermanage from './Contexto/User/userContext';
import axios from 'axios';
import "./App.css"

export default function Login() {

  //ESTADOS
  const [user,setUser]=useState('');
  const [password,setPassword]=useState('');
  //CONTEXTOS
  const {login}=useContext(usermanage);


  const handleSubmit=()=>{
   
    try {
      //HACIENDO LA PETICION PARA COMPARAR EL USUARIO
      const peticion=axios.post('');



    } catch (error) {
      
    }

  }


  return(
    <Container className='loginContainer d-flex justify-content-center' fluid={true}>

      <Row className='colorSecundario align-self-center rounded m-2'>
    
    
          <Col className='justify-content-center m-5  '>
    
            <Form>

              <Form.Group className="mb-3" controlId="formBasicEmail">
              
                <Form.Label className='fw-bold'>User</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e=>setUser(e.target.value)} />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Label className='fw-bold'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />

              </Form.Group>

              <button className='botones' type="submit">Entrar</button>

            </Form>

          </Col>

      </Row>

    </Container>

   ) ;
}
