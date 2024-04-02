// built-ins
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from '@tanstack/router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// material ui

// styles
import './index.scss';

// configs
import router from 'shared/configs/router';
import store from 'shared/configs/store';
import theme from 'shared/configs/theme';

// Register your router for maximum type safety
declare module '@tanstack/router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
