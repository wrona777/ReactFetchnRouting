import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM directly, not ReactDOM/client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render( // Use createRoot on ReactDOM directly
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();