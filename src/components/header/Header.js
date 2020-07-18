import React from 'react';
import { Navbar, NavItem, Row } from 'react-materialize';

function Header(){
  return (
    <Row>
      <Navbar className="grey darken-2">
        <NavItem href='/'>Home</NavItem>
        <NavItem href='/contact'>Contact</NavItem>
      </Navbar>
    </Row>
  );

}

export default Header;