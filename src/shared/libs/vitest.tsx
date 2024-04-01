/* eslint-disable import/no-extraneous-dependencies */
// built-ins
import { RouterProvider } from '@tanstack/router';
import { act, render as rtlRender } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Provider } from 'react-redux';

// material ui
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

// types
import type { Theme } from '@mui/material';
import type { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import type { Router } from '@tanstack/router';
import type { RenderOptions as RTLRenderOptions } from '@testing-library/react';

// helpers
import configureStore from 'shared/helpers/configureStore';
import createTestRouter from 'shared/helpers/createTestRouter';

// configs
import appRouter from 'shared/configs/router';
import rootReducer from 'shared/configs/store/rootReducer';
import rootSaga from 'shared/configs/store/rootSaga';
import appTheme from 'shared/configs/theme';

export interface RenderOptions extends Omit<RTLRenderOptions, 'wrappers'> {
  theme?: Theme;
  store?: ToolkitStore;
  router?: Router;
}

const render = async (
  component?: JSX.Element,
  {
    theme = appTheme,
    store = configureStore({ reducer: rootReducer, sagaActionWatcher: rootSaga }),
    router = component ? createTestRouter(component) : appRouter,
    ...options
  }: RenderOptions = {} as RenderOptions
) => {
  return act(() =>
    rtlRender(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>,
      options
    )
  );
};

export const userEvent = user;
export * from '@testing-library/react';
export * from 'vitest';

export default render;
