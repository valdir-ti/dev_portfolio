import React from 'react';
import { Row, Col, Card } from 'react-materialize';

import UserProfile from '../userProfile/UserProfile';
import Experience from '../experience/Experiences';

import company_avatar from '../../images/company.png';
import company_avatar2 from '../../images/company2.png';

export default function Home() {
  return (
    <Row>
      <Col m={3} s={12}>
        <UserProfile/>
      </Col>
      <Col m={8} s={12}>
        <h5 className="subtitle">About Me</h5>
        <Card>
          <div>
            <p><b>Lorem</b></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur voluptatum aut, deserunt doloremque mollitia ratione tempore saepe perferendis porro unde corporis. Tempora blanditiis debitis sapiente eaque ad. Voluptatem, earum?</p>
            <br/>
            <p><b>Ipsum</b></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur voluptatum aut, deserunt doloremque mollitia ratione tempore saepe perferendis porro unde corporis. Tempora blanditiis debitis sapiente eaque ad. Voluptatem, earum?</p>
          </div>
        </Card>
        <h5 className="subtitle">Experiences</h5>
        <Experience 
          title="NodeJS Developer"
          company="SoundCloud"
          description="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
          avatar={company_avatar}
        />
        <Experience 
          title="ReactJS Developer"
          company="Twitter"
          description="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
          avatar={company_avatar2}
        />
      </Col>
    </Row>
  )
}
