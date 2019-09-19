import React from 'react';
import { Switch, Route } from 'react-router-dom';

// screens
import TarefasIndex from './tarefas-index';

export default function TarefasRoute() {
  return (
    <Switch>
      <Route path="/tarefas" exact component={TarefasIndex} />
    </Switch>
  );
}
