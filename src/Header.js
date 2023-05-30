import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Headers.css"

function Header() {
  return (
    <div>
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./kisspng-monumental-restaurant-logo-cafe-5af54f48cfbed6.7759304615260260568509-removebg-preview.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Java Reastaurant
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
