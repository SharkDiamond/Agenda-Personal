
import React from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Login from '../Login';
import Dashboard from '../Dashboard';

export default function Enrutador() {



  return(

  <BrowserRouter>
        
        <Routes>

            <Route path="/Login" element={<Login/>} />
            
            <Route path="/Dahboard" element={<Dashboard/>}/>

            <Route path="*" element={<Navigate to="/Login"/>}/>
            
        </Routes>
    
  </BrowserRouter>);


}

