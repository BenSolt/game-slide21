import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppGame2048 from './AppGame2048';

import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AppGame2048 />
  </React.StrictMode>,
);

reportWebVitals(sendToVercelAnalytics);
