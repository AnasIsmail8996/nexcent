import   './LessonPage.css';
import Nb from '../Navbar/Nb'

import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import ComIconOne from '../../assets/freepik-shado-winject.png';
import ComIconTwo from '../../assets/freepikdevice.png';
import ComIconThere from '../../assets/freepik-Windows.png';
import ComIconFour from '../../assets/cross.png';
import ComIconFive from '../../assets/setting.png';
import ComIconSix from '../../assets/rounded.png';
import ComIconSeven from '../../assets/laptopPersons.png';

const LessonPage = () => {
  return (
    <>
    <header>
        <Nb/>
    </header>

    <Carousel data-bs-theme="dark" className='slider-parent'>
      <Carousel.Item>
       <Container>
       
        <Row xs={1} md={2}>
        <Col >
          <div className='lesson-heading'>
            <h3>    Lessons and insights <br /> <span>from 8 years </span> </h3>
            <p>Where to grow your business as a photographer: site or social media?</p>

            <div className='lesson-btn'>
             <button><p>Register</p></button>
            </div>
          </div>
        </Col>
        {/* images section  */}
        <Col >
          <div className='images-parent'>
            <div className='imageOne'>
                 <img  src={ComIconOne} alt="" />
                 <div className='imageTwo'>
                 <img src={ComIconTwo} alt=""  />
                 </div>
                 {/* img there */}
                 <div className='imageThere'>
                  <img src={ComIconThere} alt="" />
                 </div>
                 {/* image Four */}
                 <div className='imageFour'>
                 <img src={ComIconFour} alt="" />
                 </div>
                  {/* Five */}
                  <div className='imageFive'>
                   <img src={ComIconFive} alt="" />
                  </div>
                    {/* six */}
                  <div className='imageSix'>
                   <img src={ComIconSix} alt="" />
                  </div>
                  
                    {/* Seven */}
                  <div className='imageSeven'>
                   <img src={ComIconSeven} alt="" />
                  </div>
                  


            </div>
                
          </div>
        </Col>
      
      </Row>
    
       </Container>

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
      <Container>
       
       <Row xs={1} md={2}>
       <Col >
         <div className='lesson-heading'>
           <h3>    Lessons and insights <br /> <span>from 8 years </span> </h3>
           <p>Where to grow your business as a photographer: site or social media?</p>

           <div className='lesson-btn'>
            <button><p>Register</p></button>
           </div>
         </div>
       </Col>
       {/* images section  */}
       <Col >
         <div className='images-parent'>
           <div className='imageOne'>
                <img  src={ComIconOne} alt="" />
                <div className='imageTwo'>
                <img src={ComIconTwo} alt=""  />
                </div>
                {/* img there */}
                <div className='imageThere'>
                 <img src={ComIconThere} alt="" />
                </div>
                {/* image Four */}
                <div className='imageFour'>
                <img src={ComIconFour} alt="" />
                </div>
                 {/* Five */}
                 <div className='imageFive'>
                  <img src={ComIconFive} alt="" />
                 </div>
                   {/* six */}
                 <div className='imageSix'>
                  <img src={ComIconSix} alt="" />
                 </div>
                 
                   {/* Seven */}
                 <div className='imageSeven'>
                  <img src={ComIconSeven} alt="" />
                 </div>
                 


           </div>
               
         </div>
       </Col>
     
     </Row>
   
      </Container>

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Container>
       
       <Row xs={1} md={2}>
       <Col >
         <div className='lesson-heading'>
           <h3>    Lessons and insights <br /> <span>from 8 years </span> </h3>
           <p>Where to grow your business as a photographer: site or social media?</p>

           <div className='lesson-btn'>
            <button><p>Register</p></button>
           </div>
         </div>
       </Col>
       {/* images section  */}
       <Col >
         <div className='images-parent'>
           <div className='imageOne'>
                <img  src={ComIconOne} alt="" />
                <div className='imageTwo'>
                <img src={ComIconTwo} alt=""  />
                </div>
                {/* img there */}
                <div className='imageThere'>
                 <img src={ComIconThere} alt="" />
                </div>
                {/* image Four */}
                <div className='imageFour'>
                <img src={ComIconFour} alt="" />
                </div>
                 {/* Five */}
                 <div className='imageFive'>
                  <img src={ComIconFive} alt="" />
                 </div>
                   {/* six */}
                 <div className='imageSix'>
                  <img src={ComIconSix} alt="" />
                 </div>
                 
                   {/* Seven */}
                 <div className='imageSeven'>
                  <img src={ComIconSeven} alt="" />
                 </div>
                 


           </div>
               
         </div>
       </Col>
     
     </Row>
   
      </Container>

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

   
    </>
  )
}

export default LessonPage;