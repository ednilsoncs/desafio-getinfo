/* eslint-disable no-unused-vars */
// @flow

import type { State, Store } from '../types';
import { api } from '../../services';

type Credentials = {
  email: string,
  password: string
};

type AuthActionTypes = {
  login: (credentials: Credentials) => {}
};

const actions = (store: Store) => ({
  //
  async login(state: State, credentials: Credentials) {
    const { data: { token, refreshToken } } = await api.post('/auth', credentials);
    localStorage.setItem('@TOKEN', token);
    localStorage.setItem('@R_TOKEN', refreshToken);
  },

  //
  async logout(state: State) {
    await localStorage.removeItem('@TOKEN');
    await localStorage.removeItem('@R_TOKEN');
    window.location.href = '/login';
  },
});

export default actions;
