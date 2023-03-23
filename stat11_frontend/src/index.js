import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material'

const container = document.getElementById('root');
const root = createRoot(container);

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF"
    },
    secondary: {
      main: "#448791"
    }
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 400
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
