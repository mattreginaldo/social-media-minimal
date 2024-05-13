import React from 'react';
import ReactDOM from 'react-dom/client';
import Feed from './pages/feed';
import { darkTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from './styles';
import Header from '@/components/main/header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'animate.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <CssBaseline />

        <Header />

        <main>
          <Feed />
        </main>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
