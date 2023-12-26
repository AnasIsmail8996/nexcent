import './Merketing.css';
import { Container, Row,Col } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import img18 from '../../assets/image18.png';
import img19 from '../../assets/image19.png';
import img20 from '../../assets/image20.png';
const Merketing = () => {
  return (

  <Container>
    <Row>
        <Col lg={12} md={8} sm={6}  className='mt-5 '>
             <div className='marketing'>
                <h3>Caring is the new marketing</h3>
                <p>The Nextcent blog is the best place to read about the latest membership insights,
                     trends and more. See whos joining the community,
                     read about how our community are increasing their membership income and lots more.​</p>
             </div>
        </Col>

        <Row>
        <Col lg={4} md={6} sm={12} className='mb-5'>
          
        <Card style={{ width: '18rem' }}>
             <div className='card-img-merketing'>
                <img src={img18} alt="" />
             </div>
      <Card.Body>
      <div className='card-b-text'> 
     <p>Creating Streamlined Safeguarding Processes with OneRen</p>

     <div className='card-b-text-btn'>
        <button><p> Readmore</p></button>
     </div>
      </div>
     
      </Card.Body>
    </Card>
 

        </Col>
        {/* Card Two */}
        <Col lg={4} md={6} sm={12} className='mb-5'>
         
        <Card style={{ width: '18rem' }}>
             <div className='card-img-merketing'>
                <img src={img19} alt="" />
             </div>
      <Card.Body>
      <div className='card-b-text'> 
     <p>Creating Streamlined Safeguarding Processes with OneRen</p>

     <div className='card-b-text-btn'>
        <button><p> Readmore</p></button>
     </div>
      </div>
     
      </Card.Body>
    </Card>

        </Col>
        {/* Card There */}
        <Col lg={4} md={6} sm={12} className='mb-5'>
          
        <Card style={{ width: '18rem' }}>
             <div className='card-img-merketing'>
                <img src={img20} alt="" />
             </div>
      <Card.Body>
      <div className='card-b-text'> 
     <p>Creating Streamlined Safeguarding Processes with OneRen</p>

     <div className='card-b-text-btn'>
        <button><p> Readmore</p></button>
     </div>
      </div>
     
      </Card.Body>
    </Card>

        </Col>
      </Row>
    </Row>
  </Container>
  )
}

export default Merketing;
