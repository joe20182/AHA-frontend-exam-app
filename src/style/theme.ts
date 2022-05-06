import {createTheme} from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
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
