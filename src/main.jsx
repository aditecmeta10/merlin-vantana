// Update main.jsx with additional setup
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Add Web Font Loader
const WebFont = {
  load: {
    google: {
      families: ['Inter:400,500,600,700', 'Poppins:400,500,600,700']
    }
  }
};

// Import the Web Font Loader script
const script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
script.onload = () => window.WebFont.load(WebFont);
document.head.appendChild(script);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);