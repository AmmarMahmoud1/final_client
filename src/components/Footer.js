import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';


function Footer() {
  return (
    <Navbar className='footer container-fluid' collapseOnSelect expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand href="#home">
            <img src={require('../images/Search & Offer-logos_white.png')}  className='img-footer'/>
            <div className='container footer-info' >
            <div className='row'>
                <div className='col-sm-6'>
                © 2023 Search & Offer . All rights reserved.  
                </div>
                <div className='col-sm-3'>
                <Link className='footer-link' to='#'>Privacy Policy</Link>
                <Link className='footer-link' to='#'>Terms of Service</Link>
                <Link className='footer-link' to='#'>Contact Us</Link>
            
            
            
             
                </div>
            </div>
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;