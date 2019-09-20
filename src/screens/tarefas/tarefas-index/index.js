import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../../services';

function Main() {
  const [tasks, setTasks] = useState({});
  const hangleGetTasks = async () => {
    const { data } = await api.get('/tasks');
    console.log(data);
    setTasks(data);
  };
  useEffect(() => {
    hangleGetTasks();
  }, []);

  const renderActions = (id = 0) => (
    <div className="buttons">
      <Link to="/" className="button is-small is-primary">
        Editar
      </Link>
      <Link to="/" className="button is-small is-primary">
        Excluir
      </Link>
    </div>
  );

  return (
    <main className="column">
      <div>
        <h1 className="sub-title is-0">Suas Tarefas Cadastradas</h1>
        <h1 className="title">TASKS</h1>
        <div>
          <div className="level-right">
            <div>
              <Link to="/tarefas/novo" className="button is-primary">
                Nova Tarefa
              </Link>
            </div>
          </div>
        </div>
        <table className="table is-fullwidth is-hoverable">
          <thead>
            <th>titulo</th>
          </thead>
          <tbody>
            {Array(9).map(item => (
              <tr>
                <td>titulo</td>
                <td>{renderActions()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
export default Main;
