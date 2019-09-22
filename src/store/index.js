// @flow
import createStore from 'unistore';
import persistStore from 'unissist';
import devtools from 'unistore/devtools';
import indexedDBAdapter from 'unissist/integrations/indexdbAdapter';
import type { State } from './types';

const blankState: State = {
  AUTH: {
    isLoading: false,
    isAuth: false,
  },
  TAREFAS: {
    isLoading: false,
    count: 0,
    rows: [],
  },
};

const store = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test'
  ? createStore(blankState)
  : devtools(createStore(blankState));

const adapter = indexedDBAdapter();
persistStore(store, adapter);

export default store;
