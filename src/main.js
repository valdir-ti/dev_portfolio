import React from 'react';
import { Container } from 'react-materialize';

import Home from './components/home/Home';
import Contact from './components/contact/Contact';

import { Switch, Route } from 'react-router-dom';

export default function main() {
  return (
    <main>
      <Container>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route />
        </Switch>
      </Container>      
    </main>
  )
}
