import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'unistore/react';
import { authActions } from '../../store/actions';
import { State } from '../../store/types';
// screens
import TarefasIndex from './tarefas-index';
import TarefasNovas from './tarefas-nova';
import TarefasRemover from './tarefas-remover';
import TarefasEditar from './tarefas-editar';

const mapStateToProps = ({ AUTH }: State) => ({ AUTH });

function TarefasRoute(props) {
  const { AUTH } = props;
  const renderTarefas = () => (
    AUTH.isAuth ? (
      <>
        <Switch>
          <Route path="/tarefas" exact component={TarefasIndex} />
          <Route path="/tarefas/nova" exact component={TarefasNovas} />
          <Route path="/tarefas/:id/remover" exact component={TarefasRemover} />
          <Route path="/tarefas/:id/editar" exact component={TarefasEditar} />
        </Switch>
      </>
    ) : null);
  useEffect(() => {
    props.checkAuth();
  }, []);
  return (
    <>
      {console.log( AUTH ) }
      {renderTarefas()}
    </>
  );
}

export default connect(
  mapStateToProps,
  authActions,
)(TarefasRoute);
