import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './screens/login';
import Tarefas from './screens/tarefas';

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/tarefas" exact component={Tarefas} />
      </Switch>
    </Router>
  );
}
