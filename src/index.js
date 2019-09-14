import React from 'react';
import ReactDOM from 'react-dom';

// It will connect react and redux
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import store so that provider can use it
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);

serviceWorker.unregister();
