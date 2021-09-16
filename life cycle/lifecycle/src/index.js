import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App,Mount,Update,Supdate,Unmount}  from './App';
import Constructor from './App'
import User from './User';
// import Componentmount from './ComponentMount;'
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
  {/* <User/>
    <App /> */}
    {/* <Constructor /> */}
    {/* <Mount /> */}
    {/* <Update /> */}
    {/* <Supdate/> */}
    <Unmount/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
