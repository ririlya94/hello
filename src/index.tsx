import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextWrapper from './context/ThemeContextWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContextWrapper>
      <App />
    </ThemeContextWrapper>
  </React.StrictMode>
);

reportWebVitals();
