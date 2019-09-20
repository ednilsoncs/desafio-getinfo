import React from 'react';
import { Switch, Route } from 'react-router-dom';

// screens
import TarefasIndex from './tarefas-index';
import TarefasNovas from './tarefas-nova';
import TarefasRemover from './tarefas-remover';

export default function TarefasRoute() {
  return (
    <Switch>
      <Route path="/tarefas" exact component={TarefasIndex} />
      <Route path="/tarefas/nova" exact component={TarefasNovas} />
      <Route path="/tarefas/:id/remover" exact component={TarefasRemover} />
    </Switch>
  );
}
