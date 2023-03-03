import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import TeamsProvider from './contexts/TeamsProvider';

document.title = "Teste";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TeamsProvider>
      <App />
    </TeamsProvider>
  </React.StrictMode>
);