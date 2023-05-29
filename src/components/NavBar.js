import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect  expand="lg"  variant="dark"  className='Navbar'>
      <img src={require('../images/Search & Offer-logos_white.png')} className='logo'/>
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home </Nav.Link>
            <Nav.Link href="#pricing">About us</Nav.Link>
            <Nav.Link href="/add">New Ads</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="/sign-up">SIGN UP</Nav.Link>
            <Nav.Link eventKey={2} href="/login">
             LOGIN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;