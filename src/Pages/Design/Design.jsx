import  './Design.css';
import { Container, Row, Col } from 'react-bootstrap';
import Padlock from '../../assets/mobile-login/Padlock.png';
import Plant from '../../assets/mobile-login/Plant.png';
import Phone from '../../assets/mobile-login/Vectortwo.png';
import RightIcon from '../../assets/mobile-login/speech-bubble.png';
import PhoneWhite from '../../assets/mobile-login/Vector.png';
import Character from '../../assets/mobile-login/Character.png';
import earpod from '../../assets/earpod.png';
import Logo8 from '../../assets/Logo8.png';
import Logo9 from '../../assets/Logo9.png';
import Logo10 from '../../assets/Logo10.png';
import Logo11 from '../../assets/Logo11.png';
import Logo12 from '../../assets/Logo12.png';
import Logo13 from '../../assets/Logo13.png';

const Design = () => {
  return (
<Container>
<Row>
<Col xs={4} md={4} >
         <div className='Design-mobile-parent'>
         <div className='Padlock'>
            <img src={Padlock} alt="" />
         </div>
          <div className='plant'>
            <img src={Plant} alt="" />
            </div>         
               
               <div className='mobile'>
             <img src={Phone} alt="" />
               </div>
                  
          
          <div className='rightIocn'>
            <img src={RightIcon} alt="" />
          </div>

         
         <div className='Phone-White'>
            <img src={PhoneWhite} alt="" />
         </div>


           <div className='girl'>
            <img src={Character} alt="" />
           </div>


         </div>

        </Col>

        <Col xs={12} md={8} className='design-heading-text'>
         <h3>How to design your site footer like we did</h3>
         <p>Donec a eros justo. Fusce egestas tristique ultrices.
             Nam tempor, augue nec tincidunt molestie,
              massa nunc varius arcu, at scelerisque elit erat a magna.
               Donec quis erat at libero ultrices mollis. 
               In hac habitasse platea dictumst. 
               Vivamus vehicula leo dui,
                at porta nisi facilisis finibus.
                 In euismod augue vitae nisi ultricies,
                  non aliquet urna tincidunt.
                   Integer in nisi eget nulla commodo faucibus efficitur quis massa.
                    Praesent felis est, finibus et nisi ac,
             hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
         <div className='design-btn'>
            <button> <span>Learn More</span></button>
         </div>
        </Col>
</Row>


{/* Design section two */}

<Row className='mt-5'>
    <Col xs={4} md={4} >
       <div className='design-card'>
        <img src={earpod} alt="" />
       </div>
    </Col>
    {/* heading text starting from here */}
    <Col xs={12} md={8} >
        <div className='para-icons'>
       <p>Maecenas dignissim justo eget nulla rutrum molestie.
         Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper.
          Proin eu enim metus. Vivamus sed libero ornare,
           tristique quam in, gravida enim. Nullam ut molestie arcu,
            at hendrerit elit. Morbi laoreet elit at ligula molestie,
             nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, 
             quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium.
              Suspendisse potenti. Quisque malesuada enim sapien,
               vitae placerat ante feugiat eget. Quisque vulputate odio neque, 
               eget efficitur libero condimentum id.
         Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
       <strong>Tim Smith</strong>
       <b> British Dragon Boat Racing Association </b>
        </div>
             
<Row>


        <Col xs={12} md={8} lg={12}>
      <div className='logos-btn'>
         <img src={Logo8} alt="" />
         <img src={Logo9} alt="" />
         <img src={Logo10} alt="" />
         <img src={Logo11} alt="" />
         <img src={Logo12} alt="" />
         <img src={Logo13} alt="" />
         <Col xs={4} md={4} >
      <div className='customers-btn'>
        <button><p> Meet all customers</p>   </button>
      </div>
         </Col>
      </div>
        </Col>
</Row>
    </Col>
    
</Row>



</Container>
  )
}

export default Design;
