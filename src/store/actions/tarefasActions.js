/* eslint-disable no-unused-vars */
// @flow

import type { State, Store, Tarefas } from '../types';
import { api } from '../../services';

const actions = (store: Store) => ({
  async indexTarefas({ TAREFAS }: State) {
    // if (TAREFAS.isLoading) return;
    store.setState({ TAREFAS: { ...TAREFAS, isLoading: true } });
    try {
      const { data } = await api.get('/tasks');   
      store.setState({
        TAREFAS: {
          ...TAREFAS, rows: data.rows, count: data.count, isLoading: false,
        },
      });
    } catch (e) {
      const token = localStorage.getItem('@TOKEN');
      console.log(e);
    }
  },
});

export default actions;
