import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App/App';
import { rootReducer } from './redux/reducers/index.js';
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';

const devTools = (
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, devTools, applyMiddleware(thunk));

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
