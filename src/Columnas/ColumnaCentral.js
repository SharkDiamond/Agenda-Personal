import React from 'react';
import { Col } from 'react-bootstrap';
import Emails from '../ColumnasComponents/ColumnaCenter/Emails';
import Shedules from '../ColumnasComponents/ColumnaCenter/Shedules';



export default function ColumnaCentral() {
  
  
  return(<Col className="p-4 border"  xs="12" md="6" lg="4">
  
  <h3 className='text-center mb-3' style={ {color:"#FDEBCD","font-weight": "bold"} }>Compromisos</h3>
  <Shedules/>
    
  <Emails/>
  
  </Col>) ;
}
