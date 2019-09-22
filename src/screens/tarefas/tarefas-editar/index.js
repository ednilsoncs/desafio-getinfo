import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { api } from '../../../services';

function Main(props) {
  const {
    history: { goBack, push },
    match: {
      params: { id },
    },
  } = props;
  const [taski, setTaski] = useState({
    id: '',
    task: '',
  });
  const [loading, setLoading] = useState(false);
  const handleEditar = async () => {
    setLoading(true);
    try {
      const { data } = await api.put(`tasks/${id}`, { task: taski.task });
      push('/tarefas');
      setTaski(data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  const handleGetTask = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`tasks/${id}`);
      setTaski(data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    handleGetTask();
  }, []);

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Vamos lá</p>
        </header>
        <section className="modal-card-body">
          <div className="content">
            <p>Digite a nova descrição da tarefa:</p>
          </div>
          <div>
            {loading ? (
              <ReactLoading
                type="spin"
                color="#006400"
                height="20%"
                width="5%"
              />
            ) : (
              <input
                value={taski.task}
                onChange={(e) => {
                  setTaski({ ...taski, task: e.target.value });
                }}
                type="text"
              />
            )}
          </div>
        </section>
        <footer className="modal-card-foot has-text-right">
          <button
            type="submit"
            className="button is-danger"
            onClick={handleEditar}
          >
            Salvar
          </button>
          <button type="button" className="button" onClick={goBack}>
            Cancelar
          </button>
        </footer>
      </div>
    </div>
  );
}
export default Main;
