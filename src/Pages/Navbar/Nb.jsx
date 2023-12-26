
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nb.css';
import Iconlogo from '../../assets/Iconlogo.png';
import IconName from '../../assets/Nexcent.png';
const NavbarCom = () => {
  return (
    <>
    <div className='Nb-wapper'>

    <Navbar expand="lg" className="navbar-parent col-lg-12 col-md-12 col-sm-12">
      <Container fluid>
        <Navbar.Brand href="#">
         <div className='imges-parent'>

            <img className='ItemsMerge ' src={Iconlogo} alt="" />
            <img className='ItemsMerge ' src={IconName} alt="" />
         </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#features" className='linksItems '><p>Home</p></Nav.Link>
            <Nav.Link href="#features" className='linksItems '><p>Features</p></Nav.Link>
            <Nav.Link href="#features" className='linksItems '><p>Community</p></Nav.Link>
            <Nav.Link href="#features" className='linksItems '><p>Blog</p></Nav.Link>
            <Nav.Link href="#features" className='linksItems '><p>Pricing</p></Nav.Link>
          
          
          
         <div className='btn-parent'>

            <button >Register Now</button>
         </div>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>


 


    
    </div>
    </>
  )
}

export default NavbarCom;
