import {createTheme} from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1440, // desktop
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ['Ubuntu', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
      ',',
    ),
  },
  palette: {
    background: {
      default: '#181818',
    },
    primary: {
      main: '#FF9B33',
    },
    // secondary: {
    //   main: '#19857b',
    // },
  },
});

export default theme;
