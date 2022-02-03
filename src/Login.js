//IMPORTACIONES
import React, { useContext, useState } from 'react';
import {Container,Row,Col,Form } from "react-bootstrap";
import usermanage from './Contexto/User/userContext';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import "./App.css"
import ipPeticiones from './Ip';
import {toast} from "react-toastify";


export default function Login() {

  //ESTADOS
  const [username,setUser]=useState('');
  const [password,setPassword]=useState('');
  //CONTEXTOS
  const {login}=useContext(usermanage);

  const envia=useNavigate();

  //FUNCION PARA INICIAR SESSION
  const handleSubmit=async(e)=>{
   
    try {

      e.preventDefault();
      //HACIENDO LA PETICION PARA COMPARAR EL USUARIO
      const peticion=await axios.post(ipPeticiones+"User/validate",{
        username,
        password});

        login(username,peticion.data.token,peticion.data.token)

        envia("/Dashboard");

    } catch (error) {
      toast.warning(error.response.data)
     // alert(error.response.data);
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

              <button className='botones' type="submit" onClick={handleSubmit}>Entrar</button>

            </Form>

          </Col>

      </Row>

    </Container>

   ) ;
}
