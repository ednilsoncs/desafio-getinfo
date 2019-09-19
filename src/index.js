import React from 'react';
import ReactDOM from 'react-dom';
import dayjs from 'dayjs';
import App from './App';
import * as serviceWorker from './serviceWorker';

dayjs.locale('pt-br');
window.day = dayjs;
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
