import React, { useState } from 'react';
import { api } from '../../../services';

function Main(props) {
  const {
    history: { goBack, push },
  } = props;
  const [task, setTask] = useState('');
  const handleSave = async () => {
    console.log(task);
    try {
      await api.post('/tasks', task);
      push('/tarefas');
    } catch (e) {
      console.log('teste');
    }
  };
  return (
    <div className="modal is-active">
      <div className="column">
        <div className="modal-background" />
        <div className="modal-card">
          <div className="field">
            <header className="modal-card-head">
              <p className="modal-card-title">Vamos lá</p>
            </header>
            <section className="modal-card-body">
              <div className="content">
                <p>Digite as informações sobre as tarefas</p>
              </div>
              <input
                className="input"
                type="password"
                value={task}
                onChange={e => setTask(e.target.value)}
              />
            </section>
            <footer className="modal-card-foot has-text-right">
              <button
                type="submit"
                className="button is-danger"
                onClick={handleSave}
              >
                Salvar
              </button>
              <button type="button" className="button" onClick={goBack}>
                Cancelar
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
