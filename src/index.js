import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App/App';
import { rootReducer } from './redux/reducers/index.js';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root')
);

registerServiceWorker();
