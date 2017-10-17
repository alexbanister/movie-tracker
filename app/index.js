import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App/App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducers';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

ReactDOM.render(
  <Provider store={store}>
    const router = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
    );
  </Provider>,
  document.getElementById('root')
);
