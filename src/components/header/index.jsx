import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { AuthContext } from '../../contexts/authContext';

const Header = () => {
  const { isAuth, user, Logout } = useContext(AuthContext)
  const Name = isAuth ? (user ? `Welcome ${user.fname} ${user.lname}` : 'whaat') : 'Welcom.'
  const AuthenticatedUserJSX = () => {
    return (
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#link">Visualise votre panier</Nav.Link>
          <Nav.Link href="#link">Suivi vos commandes</Nav.Link>
          <Nav.Link href="#link">Consulter le Catalodue</Nav.Link>
        </Nav>
        <Button onClick={Logout} variant="outline-danger">Logout</Button>
      </Navbar.Collapse>
    )
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">{Name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {
          isAuth ?
            AuthenticatedUserJSX()
            :
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
              <Button href="login" variant="outline-success">Login</Button>
            </Navbar.Collapse>
        }
      </Navbar>
    </div>
  );
}

export default Header;