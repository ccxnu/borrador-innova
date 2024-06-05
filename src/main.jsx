import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './Theme/fonts.css';  // Importa el archivo CSS de las fuentes
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './Theme/Theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
