import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Home'; // This correctly loads your Home.js file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
