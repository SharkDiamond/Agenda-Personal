
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Enrutador from './Rutas/Routes';
import Userprovider from './Contexto/User/userProvider';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {

  toast.configure();

  return (


    <Userprovider>
   
      <Enrutador/>
  
    </Userprovider>
  );
}

export default App;
