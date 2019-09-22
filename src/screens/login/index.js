/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import { connect } from 'unistore/react';
import { authActions } from '../../store/actions';
import type { State } from '../../store/types';

const mapStateToProps = state => ({ state });
function Login(props) {
  const { state } = props;
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(false);
  const handleLogin = async () => {
    try {
      setLoading(true);
      await props.login(form);
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
                type="spin"
                color="#006400"
                height="20%"
                width="10%"
              />
            ) : (
              <button className="button" type="submit">
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  authActions,
)(Login);
