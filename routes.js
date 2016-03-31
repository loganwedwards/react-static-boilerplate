import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import AppBase from './pages/app-base';
import About from './pages/about';
import Home from './pages/home';
import Team from './pages/team';

export default (
  <Router>
    <Route path="/" component={AppBase}>
      <IndexRoute component={Home} />
      <Route path="about" component={About}></Route>
      <Route path="team" component={Team}></Route>
    </Route>
  </Router>
);
