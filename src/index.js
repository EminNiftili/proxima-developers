import React from 'react';
import '@fontsource/crimson-pro';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

document.title = "Proxima Developers";

ReactDOM.createRoot(document.getElementById('root')).render(
  

  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
