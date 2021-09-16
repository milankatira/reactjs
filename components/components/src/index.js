import React, { forwardRef } from 'react';
import ReactDOM from 'react-dom';
import App,{Memo} from './App';
import reportWebVitals from './reportWebVitals';
import Refs from './Refs';
import Forwardref from './Forwardref'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Memo/>
    <Refs/>
    <Forwardref/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
