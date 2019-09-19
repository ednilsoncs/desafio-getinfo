import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './screens/login';


export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    </Router>
  );
}
