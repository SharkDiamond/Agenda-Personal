import React from 'react';
import { Col,Row } from 'react-bootstrap';
import AmountCompromisos from '../ColumnasComponents/ColumnaCenter/AmountCompromisos';
import Noticias from '../ColumnasComponents/ColumnaLeft/Noticias';

export default function SegundaFila() {
  return (
    <Row className="pb-3" >
    
    <Col className='ps-4 pe-4' xs="12" md="6" lg="6">
    <Noticias/>
    </Col>

   
    <Col className='ps-4 pe-4' xs="12" md="6" lg="6">
    <h3 className='text-center' style={ {color:"#FDEBCD","font-weight": "bold"} }>Cantidad De Compromisos</h3>
    
    <AmountCompromisos/>
    </Col>

    </Row>
  )
}