import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import App from './App';

// // measuring app performance. docs: https://bit.ly/CRA-vitals
// import reportWebVitals from './reportWebVitals';
// reportWebVitals(console.log);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

