// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Common style
import './css/Reset.css';
import './css/Style.css';

// App
import App from './App';

const mainElement = document.querySelector('main');
const root = ReactDOM.createRoot(mainElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();