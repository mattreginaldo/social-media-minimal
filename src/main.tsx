import React from 'react';
import ReactDOM from 'react-dom/client';
import Feed from './pages/feed';
import { darkTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from './styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <CssBaseline />
      <Feed />
    </ThemeProvider>
  </React.StrictMode>
);
