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

export const theme = createTheme({
  spacing: (factor) => `${0.4 * factor}rem`,
  palette: {
    primary: {
      main: "#448791",
      light: alpha("#448791", 0.1),
      dark: "#387078"
    },
    secondary: {
      main: "#6498E6"
    },
    hint: {
      main: "#7D7D7D",
      light: "#A5A5A5",
      dark: "#7A7979"
    },
    background: {
      paper: "#FFFFFF",
      default: "#F8F8F8"
    }
  },
  typography: {
    htmlFontSize: 10,
    h2: {
      fontSize: "3.2rem"
    },
    h3: {
      fontSize: "2.6rem"
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
      fontWeight: 500,
      textTransform: "none"
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
