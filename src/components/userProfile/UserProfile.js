import React from 'react';
import { Row, Card, Col } from 'react-materialize';

import avatar from '../../images/avatar.png';

export default function UserProfile() {
  return (
    <Card>
      <Row>
        <Col s={8} m={8} offset="s2 m2">
          <img src={avatar} className="circle responsive-img" alt="Avatar User"/>
        </Col>
      </Row>
      <Row className="center-align">
        <h5>Lorem Ipsum</h5>
        <p className="grey darken-2 white-text">NodeJS Developer</p>
      </Row>
    </Card>
  )
}
