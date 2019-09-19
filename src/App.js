import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'unistore/react';
import { ToastContainer } from 'react-toastify';


import AppRoutes from './routes';

function App() {
  return (
    <Provider>
      <>
        <ToastContainer />
        <AppRoutes />
      </>
    </Provider>
  );
}

export default hot(module)(App);
