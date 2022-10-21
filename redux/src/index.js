import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import { Provider } from 'react-redux';
import { store } from '../src/store/index';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
   <App/>
  </Provider>
 
  
);
