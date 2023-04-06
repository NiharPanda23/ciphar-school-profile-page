import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons';
import { faBell, faCompass } from  '@fortawesome/free-regular-svg-icons';
<FontAwesomeIcon icon="fa-regular fa-compass" />


export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
          <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <FontAwesomeIcon icon={faCompass} />
                <NavDropdown title="Browse" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">App Development</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Web Development</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Game Development</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Data Structures</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">Programming</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">Machine Learning</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.7">Data Science</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.8">Other</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search and Learn"
                      className="me-2"
                      aria-label="Search"
                    /><FontAwesomeIcon icon={faMagnifyingGlass} />
                    <FontAwesomeIcon icon={faSliders} />
                    <FontAwesomeIcon icon={faBell} />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
