import React from 'react';
import ReactDOM from 'react-dom';

import App from './saga/App';
import {Provider} from 'react-redux';
import store from './saga/store';


ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
)
