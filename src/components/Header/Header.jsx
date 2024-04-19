import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaApple } from "react-icons/fa";

import "./header.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand='lg' className='header-navbar'>
      <Container>
        <div className='header-navbar-icon' onClick={() => navigate("/")}>
          <FaApple className='header-navbar-icon-svg' />
          <h1 className='header-navbar-icon-title'>
            Apple<span> Store</span>
          </h1>
        </div>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          className='order-0 btn-light button-toggle'
          style={{
            border: "none",
            outline: "none",
            boxShadow: "none",
            paddingLeft: 0,
            paddingRight: 0,
          }}
        />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='/#'>Inicio</Nav.Link>
            <NavDropdown title='Nuevos' id='collapsible-nav-dropdown'>
              <NavDropdown.Item href='#nuevos?producto=airpods'>AirPods</NavDropdown.Item>
              <NavDropdown.Item href='#nuevos?producto=ipad'>iPad</NavDropdown.Item>
              <NavDropdown.Item href='#nuevos?producto=macbook'>Macbook</NavDropdown.Item>
              <NavDropdown.Item href='#nuevos?producto=notebook'>Notebook</NavDropdown.Item>
              <NavDropdown.Item href='#nuevos?producto=watch'>Watch</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Usados' id='collapsible-nav-dropdown'>
              <NavDropdown.Item href='#usados?producto=iphone-7'>iPhone 7</NavDropdown.Item>
              <NavDropdown.Item href='#usados?producto=iphone-8'>iPhone 8</NavDropdown.Item>
              <NavDropdown.Item href='#usados?producto=iphone-x'>iPhone X</NavDropdown.Item>
              <NavDropdown.Item href='#usados?producto=iphone-xr'>iPhone XR</NavDropdown.Item>
              <NavDropdown.Item href='#usados?producto=iphone-xs'>iPhone XS</NavDropdown.Item>
              <NavDropdown.Item href='#usados?producto=iphone-se'>iPhone SE</NavDropdown.Item>
              <NavDropdown.Item href='#usados?producto=iphone-11'>iPhone 11</NavDropdown.Item>
              <NavDropdown.Item href='#usados?producto=iphone-12'>iPhone 12</NavDropdown.Item>
              <NavDropdown.Item href='#usados?producto=iphone-13'>iPhone 13</NavDropdown.Item>
              <NavDropdown.Item href='#usados?producto=iphone-14'>iPhone 14</NavDropdown.Item>
              <NavDropdown.Item href='#usados?producto=iphone-15'>iPhone 15</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
