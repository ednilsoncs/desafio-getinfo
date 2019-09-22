import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'unistore/react';
import { ToastContainer } from 'react-toastify';
import store from './store';

import AppRoutes from './routes';

function App() {
  return (
    <Provider store={store}>
      <>
        <ToastContainer />
        <AppRoutes />
      </>
    </Provider>
  );
}

export default hot(module)(App);
