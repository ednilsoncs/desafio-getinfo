import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../services';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleLogin = () => {
    console.log(form);
    try {
      const { data } = api.post('/auth', form);
      toast('senha/email errado');
    } catch (e) {
      toast('senha/email errado');
    }
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
              </div>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
