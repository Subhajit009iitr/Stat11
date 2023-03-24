import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { ThemeProvider, createTheme, alpha } from '@mui/material';

const container = document.getElementById('root');
const root = createRoot(container);

const theme = createTheme({
  palette: {
    primary: {
      main: "#448791",
      light: alpha("#448791", 0.1)
    },
    secondary: {
      main: "#6498E6"
    },
    hint: {
      main: "#7D7D7D",
      ligth: "#A5A5A5",
      dark: "#7A7979"
    },
    background: {
      paper: "#FFFFFF",
      default: "#FFFFFF"
    }
  },
  typography: {
    htmlFontSize: 10,
    h2: {
      fontSize: "3.2rem",
      fontWeight: 400,
    },
    h3: {
      fontSize: "2.8rem"
    },
    h4: {
      fontSize: "2.4rem"
    },
    h5: {
      fontSize: "2.2rem"
    },
    h6: {
      fontSize: "2rem"
    },
    body1: {
      fontSize: "1.8rem"
    },
    body2: {
      fontSize: "1.6rem"
    },
    button: {
      fontSize: "2.4rem",
      fontWeight: 500
    }
  }
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
