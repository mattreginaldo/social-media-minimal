import { createTheme, Theme } from '@mui/material/styles';

const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121214',
      paper: '#121214',
    },
    primary: {
      main: '#00875F',
    },
  },
});

export { darkTheme };
