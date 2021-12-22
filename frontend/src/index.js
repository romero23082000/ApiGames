import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from './Routes';
import Navigation from './components/funcional/navbar/Navigation';



ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);


