import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { api } from "../../../services";

function Main() {
  const [tasks, setTasks] = useState({
    count: 0,
    rows: [],
  });
  const [loading, setLoading] = useState(false);
  const hangleGetTasks = async () => {
    setLoading(true);
    const { data } = await api.get("/tasks");
    setTasks(data);
    setLoading(false);
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
          <tbody>
            {loading ? (
              <ReactLoading
                type="spin"
                color="#006400"
                height="20%"
                width="5%"
              />
            ) : (
              tasks.rows.map(item => (
                <tr>
                  <td>{item.task}</td>
                  <td>{renderActions()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
export default Main;
