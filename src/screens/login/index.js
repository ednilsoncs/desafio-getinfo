import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';
import { api } from '../../services';

function Login(props) {
  const [form, setForm] = useState({
    email: 'frontend-project@getinfo.net.br',
    password: '123456',
  });
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(false);
  const handleLogin = async () => {
    try {
      setLoading(true);
      const { data } = await api.post('/auth', form);
      localStorage.setItem('@TOKEN', data.token);
      props.history.push('/tarefas');
    } catch (e) {
      setErro(true);
    }
    setLoading(false);
  };
  return (
    <div id="login-screen" className="hero is-fullheight">
      <div className="hero-body">
        <div>
          <h1 className="sub-title is-o">Bem vindo(a) </h1>
          <h1 className="title">Gerengiador de Tarefas </h1>
          <form onSubmit={handleLogin}>
            {/* fild login */}
            <div className="column">
              <div className="field">
                <span>Login</span>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={form.email}
                    placeholder="seu@email.com"
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>
            </div>
            {/* fild senha */}
            <div className="column">
              <div className="field">
                <span>Senha</span>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })
                    }
                  />
                </div>
                <div>{erro && <p>senha ou login errado</p>}</div>
              </div>
            </div>
            {loading ? (
              <ReactLoading
                type="balls"
                color="#006400"
                height="20%"
                width="10%"
              />
            ) : (
              <button type="submit">
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
