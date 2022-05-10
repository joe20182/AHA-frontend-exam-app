import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider as SCThemeProvider} from 'styled-components';
import {SnackbarProvider} from 'notistack';
import {store} from '@/store';
import App from '@/App';
import theme from '@/style/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SCThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
          <CssBaseline />
          <Provider store={store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Provider>
        </SnackbarProvider>
      </SCThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
