
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
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
