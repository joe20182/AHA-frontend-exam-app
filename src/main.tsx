import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider as SCThemeProvider} from 'styled-components';
import {SnackbarProvider} from 'notistack';
import App from '@/App';
import theme from '@/style/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SCThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
          <CssBaseline />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SnackbarProvider>
      </SCThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
