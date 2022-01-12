import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(()=>{ return [
  {id : 0, name : '멋진신발', quan : 2},
  {id : 1, name : '예쁜신발', quan : 4},
  {id : 2, name : '적당한신발', quan : 8},
  {id : 3, name : '놀라운신발', quan : 1},
  {id : 4, name : '신기한신발', quan : 8},
  {id : 5, name : '이상한신발', quan : 2},
  {id : 6, name : '무서운신발', quan : 24},
  {id : 7, name : '엄청난신발', quan : 3},
] });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
