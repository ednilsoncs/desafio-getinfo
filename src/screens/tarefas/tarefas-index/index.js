// @flow
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { connect } from 'unistore/react';
import { tarefasActions } from '../../../store/actions';
import { api } from '../../../services';
import type { State, TarefasState } from '../../../store/types';

const mapStateToProps = ({ TAREFAS }: State) => ({ TAREFAS });

function Main(props: Props) {
  const { TAREFAS, indexTarefas } = props;
  useEffect(() => {
    indexTarefas();
  }, []);

  const renderActions = props => (
    <div className="buttons">
      <Link to={`tarefas/${props}/editar`} className="button is-small is-primary">
        Editar
      </Link>
      <Link to={`tarefas/${props}/remover`} className="button is-small is-primary">
        Excluir
      </Link>
    </div>
  );

  return (
    <main className="column">
      <div className="column">
        <span>Bem vindo a suas Tarefas</span>
        <span />
        <br />
        <Link to="/">
          <button type="button">sair</button>
        </Link>
      </div>
      <div>
        <h1 className="sub-title is-0">Suas Tarefas Cadastradas</h1>
        <div>
          <div className="level-right">
            <div>
              <Link to="/tarefas/nova" className="button is-primary">
                Nova Tarefa
              </Link>
            </div>
          </div>
        </div>
        <table className="table is-fullwidth is-hoverable">
          <thead>
            <th>titulo</th>
            <th>ações</th>
          </thead>
          {console.log(TAREFAS)}
          <tbody>
            {TAREFAS.isLoading ? (
              <ReactLoading
                type="spin"
                color="#006400"
                height="20%"
                width="5%"
              />
            ) : (
              TAREFAS.rows.map(item => (
                <tr>
                  <td>{item.task}</td>
                  <td>{renderActions(item.id)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
export default connect(mapStateToProps, tarefasActions)(Main);
