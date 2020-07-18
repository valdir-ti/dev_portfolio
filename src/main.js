import React from 'react';
import { Container } from 'react-materialize';

import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import PageNotFound from './components/404/PageNotFound'

import { Switch, Route } from 'react-router-dom';

export default function main() {
  return (
    <main>
      <Container>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route component={PageNotFound}/>
          <Route />
        </Switch>
      </Container>      
    </main>
  )
}
