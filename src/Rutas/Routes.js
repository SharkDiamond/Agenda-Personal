//IMPORTACIONES
import React from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Login from '../Login';
import Dashboard from '../Dashboard';
import PrivateRoutes from './privateRoutes';


export default function Enrutador() {



  return(

  <BrowserRouter>
        
        <Routes>

            <Route path="/Login" element={<Login/>} />
            
            <Route path="/Dashboard" element={<PrivateRoutes><Dashboard/></PrivateRoutes>}/>
            
            <Route path="*" element={<Navigate to="/Login"/>}/>
            
        </Routes>
    
  </BrowserRouter>
  
  );


}

