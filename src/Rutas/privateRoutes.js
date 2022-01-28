//IMPORTACIONES
import {React,useContext} from 'react';
import {Navigate}  from 'react-router-dom';
import usermanage from '../Contexto/User/userContext';


export default function PrivateRoutes({children}) {

  const {usuario}=useContext(usermanage);

  
  return usuario ?  children  : <Navigate to="/Login" />


}
