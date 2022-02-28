import React from 'react';
import { Col } from 'react-bootstrap';
import AmountCompromisos from '../ColumnasComponents/ColumnaCenter/AmountCompromisos';
import Shedules from '../ColumnasComponents/ColumnaCenter/Shedules';




function ColumnaCentral() {
  return (
    <Col className="pt-4"  xs="12" md="6" lg="6">
    
    <h3 className='text-center mb-3' style={ {color:"#FDEBCD","font-weight": "bold"} }>Compromisos</h3>
    <div className='ps-4 pe-4'>
    <Shedules/>
    </div>
    <h3 className='text-center mb-4 mt-5' style={ {color:"#FDEBCD","font-weight": "bold"} }>Cantidad De Compromisos</h3>
    <div className='ps-4 pe-4'>
    <AmountCompromisos/>
    </div>
    </Col>
  )
}

export default ColumnaCentral;
