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
  const renderTarefas = () => (!AUTH.isLoading && AUTH.isAuth ? (
    <Switch>
      <Route path="/tarefas" exact component={TarefasIndex} />
      <Route path="/tarefas/nova" exact component={TarefasNovas} />
      <Route path="/tarefas/:id/remover" exact component={TarefasRemover} />
      <Route path="/tarefas/:id/editar" exact component={TarefasEditar} />
    </Switch>
  ) : null);
  useEffect(() => {
    props.checkAuth();
  }, []);
  return (
    <>
      {AUTH.isLoading && (
        <div
          style={{
            height: '100vh',
            width: '100vw',
            background: '#222',
            position: 'fixed',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            transition: '.3s',
          }}
        >
          <span className="title is-4 has-text-white-bis is-uppercase">
            Carregando...
          </span>
        </div>
      )}

      {renderTarefas()}
    </>
  );
}

export default connect(
  mapStateToProps,
  authActions,
)(TarefasRoute);
