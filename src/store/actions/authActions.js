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
    const { data: { token } } = await api.post('/auth', credentials);
    await localStorage.setItem('@TOKEN', token);
    console.log(token);
  },

  //
  async logout(state: State) {
    await localStorage.removeItem('@TOKEN');
    await localStorage.removeItem('@R_TOKEN');
    window.location.href = '/login';
  },

  async checkAuth({ AUTH }: State) {
    store.setState({ AUTH: { ...AUTH, isLoading: true } });

    const token = localStorage.getItem('@TOKEN');

    if (token) {
      await store.setState({ AUTH: { ...AUTH, isLoading: false, isAuth: true } });
    } else {
      window.location.href = '/login';
    }
  },
});

export default actions;
