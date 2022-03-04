import React from 'react';
import { Col,Row } from 'react-bootstrap';
import AmountCompromisos from '../ColumnasComponents/ColumnaCenter/AmountCompromisos';
import Noticias from '../ColumnasComponents/ColumnaLeft/Noticias';

export default function SegundaFila() {
  return (
    <Row  >
    
    <Col className='ps-4 ' xs="12" md="12" lg="6">
    <Noticias/>
    </Col>

    {/*ps-4 pe-4 */}
    <Col className=' ps-4 pb-3' xs="12" md="12" lg="6">
    <h3 className='text-center mb-2 mt-2 mt-md-3' style={ {color:"#FDEBCD","font-weight": "bold"} }>Cantidades De Compromisos</h3>
    
    <AmountCompromisos/>
    </Col>

    </Row>
  )
}