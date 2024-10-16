import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App1 from './App';
import reportWebVitals from './reportWebVitals';
import App2 from './kar';
import App3 from './kar1';
import App4 from './kar2';
import App5 from './kar3';
import App6 from './kar4';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App1/>
    <App2 /> 
    <App3/>
    <App4/>
    <App5/>
    <App6/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
