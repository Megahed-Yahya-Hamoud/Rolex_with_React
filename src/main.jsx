import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // global reset + tokens MUST come before the components' CSS Modules
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
