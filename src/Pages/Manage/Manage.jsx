import './Manage.css';
import { Container, Row, Col } from 'react-bootstrap';
import Framemanage from '../../assets/Framemanage.png';
import Iconhelp1 from '../../assets/Iconhelp1.png';
import Iconhelp2 from '../../assets/Iconhelp2.png';
import Iconhelp3 from '../../assets/Iconhelp3.png';
import Iconhelp4 from '../../assets/Iconhelp4.png';
const Manage = () => {
  return (
    <>
    <Container>
   <Row className='mt-5'>
   <Col sm={4} > 
       <Col lg={12} md={8} sm={6}>
        <div className='manage-img'>
            <img src={Framemanage} alt="" />
        </div>
       </Col>
   </Col>



        <Col sm={8} >

            <Col lg={12} md={8} sm={6}>
            <div className='manage-heading-text'>
           <h3>The unseen of spending three years at Pixelgrade</h3>
           <p>Lorem ipsum dolor sit amet,
             consectetur adipiscing elit.
              Sed sit amet justo ipsum.
               Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta.
                 Nullam mattis tristique iaculis. 
                 Nullam pulvinar sit amet risus pretium auctor.
             Etiam quis massa pulvinar, 
             aliquam quam vitae, tempus sem.
              Donec elementum pulvinar odio.</p>
           <div className='manage-btn'>
            <button><span>Learn More</span> </button>
           </div>
        </div>
            </Col>
        </Col>
   </Row>

<Row className='mt-5'>
    <Col lg={6} md={8} sm={4} >
       <div className='help-heading'>
        <h3><span>   Helping a local <br /> </span> business reinvent itself</h3>
        <p>We reached here with our hard work and dedication</p>
       </div>
    
    </Col>
    <Col lg={6} md={8} sm={4}   >
      
        <Row xs={1} md={2}>
        <Col>
          <div className='img-help-icon-One'>
           <img src={Iconhelp1} alt="" />
           <div className='number-para'>
           <h3>2,245,341</h3>
            <p>Members</p>
            </div> 
          </div>
              
        </Col>
        {/* Two   */}
        <Col>
        <div className='img-help-icon-One'>
           <img src={Iconhelp2} alt="" />
           <div className='number-para'>
           <h3>46,328</h3>
            <p>Clubs</p>
            </div> 
          </div>
        
        </Col>
        {/* There   */}
        <Col>
        <div className='img-help-icon-One'>
           <img src={Iconhelp3} alt="" />
           <div className='number-para'>
           <h3>828,867</h3>
            <p>Event Bookings</p>
            </div> 
          </div>
        
        </Col>
        {/* Four   */}
        <Col>
        
        <div className='img-help-icon-One'>
           <img src={Iconhelp4} alt="" />
           <div className='number-para'>
           <h3>1,926,436</h3>
            <p>Payments</p>
            </div> 
          </div>
        </Col>
      </Row>
        
     
       


    </Col>
    
</Row>




    </Container>
    </>
  )
}

export default Manage;