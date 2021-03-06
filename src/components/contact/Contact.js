import React from 'react';
import { Row, Col, Card, Input, Button } from 'react-materialize';

import UserProfile from '../userProfile/UserProfile';

export default function Contact() {
  return (
    <Row>
      <Col m={3} s={12}>
        <UserProfile />      
      </Col>      
      <Col m={8} s={12}>
        <h5>Contact</h5>      
        <Card>
          <Row>
            <Input placeholder="lorem@ipsum.com" type="email" label="Email" s={12} />
            <Input placeholder="Lorem Ipsum..." label="Message" s={12} />
            <Col s={12} m={12}>
              <Button waves="light" className="right grey darken-2">SEND</Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>    
  )
}
