import React from 'react';
import { Col } from 'react-bootstrap';
import Shedules from '../ColumnasComponents/ColumnaCenter/Shedules';



export default function ColumnaCentral() {
  
  
  return(<Col className="p-4 border"  xs="12" md="6" lg="4">
  
  <Shedules/>
    
  <h1 className='text-white'>Columna 2</h1>
  
  </Col>) ;
}
