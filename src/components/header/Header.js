import React from 'react';
import { Navbar, Row } from 'react-materialize';
import { Link } from 'react-router-dom';

function Header(){

  return (
    <Row>
      <Navbar className="grey darken-2">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </Navbar>
    </Row>
  );

}

export default Header;