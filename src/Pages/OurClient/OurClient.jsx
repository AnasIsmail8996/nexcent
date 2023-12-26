import  './OurClient.css';
import { Container, Row, Col } from 'react-bootstrap';
import Logo1 from '../../assets/Logo1.png';
import Logo2 from '../../assets/Logo2.png';
import Logo3 from '../../assets/Logo3.png';
import Logo4 from '../../assets/Logo4.png';
import Logo5 from '../../assets/Logo5.png';
import Logo6 from '../../assets/Logo6.png';
import Card from 'react-bootstrap/Card';
import cardIconone from '../../assets/cardIconone.png';
import cardIcontwo from '../../assets/cardIcontwo.png';
import cardIconthere from '../../assets/cardIconthere.png';
const OurClient = () => {
  return (
    <>
    <Container>
      <Row>
    <Col lg={12} md={12} sm={12}>
    <div className='ourClient-Heading'>
     <h3>Our Clients</h3>
     <p>We have been working with some Fortune 500+ clients</p>
    </div>
    </Col>
      </Row>
      <Row >
        <Col lg={2} md={4} sm={6} >
        <div className='logo-img-one'>
            <img src={Logo1} alt="" />
        </div>
        </Col>
        <Col lg={2} md={4} sm={6} >
        <div className='logo-img-one'>
            <img src={Logo2} alt="" />
        </div>
        </Col>
        <Col lg={2} md={4} sm={6} >
        <div className='logo-img-one'>
            <img src={Logo3} alt="" />
        </div>
        </Col>
        <Col lg={2} md={4} sm={6}>
        <div className='logo-img-one' >
            <img src={Logo4} alt="" />
        </div>
        </Col>
        <Col lg={2} md={4} sm={6}>
        <div className='logo-img-one' >
            <img src={Logo5} alt="" />
        </div>
        </Col>
        <Col lg={2} md={4} sm={6}>
        <div className='logo-img-one' >
            <img src={Logo6} alt="" />
        </div>
        </Col>
        
      </Row>

        {/* manage heading starting from here */}
     
     <Row>
     <Col lg={12} md={12} sm={12}>
     <div className='manage-heading'>
      <h3>Manage your entire community in a single system</h3> 
      <p>Who is Nextcent suitable for?</p>
     </div>
     </Col>    
    </Row>  
     

     {/* Card section starting from here */}

        <Row className='mt-5 '>
            <Col lg={4} md={6} sm={12}  className='mb-5'>
            <Card style={{ width: '18rem' }}>
              <div className='card-img'>

   <img src={cardIconone} alt=""  />
              </div>
      <Card.Body>
        <Card.Title className='card-title'> <h3> Membership Organisations </h3></Card.Title>
        <Card.Text className='card-text'><p>
        Our membership management software provides
         full automation of membership renewals and payments
        </p>
        </Card.Text>
       
      </Card.Body>
    </Card>
            </Col>
            {/* card Two */}
            <Col lg={4} md={6} sm={12}  className='mb-5'>
            <Card style={{ width: '18rem' }}>
              <div className='card-img'>

   <img src={cardIcontwo} alt=""  />
              </div>
      <Card.Body>
        <Card.Title className='card-title'> <h3> Membership Organisations </h3></Card.Title>
        <Card.Text className='card-text'><p>
        Our membership management software provides
         full automation of membership renewals and payments
        </p>
        </Card.Text>
       
      </Card.Body>
    </Card>
            </Col>

            {/* card there */}
            <Col lg={4} md={6} sm={12} className='mb-5' >
            <Card style={{ width: '18rem', marginBottom:'10px' }}>
              <div className='card-img'>

   <img src={cardIconthere} alt=""  />
              </div>
      <Card.Body>
        <Card.Title className='card-title'> <h3> Membership Organisations </h3></Card.Title>
        <Card.Text className='card-text'><p>
        Our membership management software provides
         full automation of membership renewals and payments
        </p>
        </Card.Text>
       
      </Card.Body>
    </Card>
            </Col>
            
        </Row>
    </Container>
    </>
  )
}

export default OurClient