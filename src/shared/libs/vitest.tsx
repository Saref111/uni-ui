/* eslint-disable import/no-extraneous-dependencies */
import type { Theme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import type { Router } from '@tanstack/router';
import { RouterProvider } from '@tanstack/router';
import type { RenderOptions as RTLRenderOptions } from '@testing-library/react';
import { act, render as rtlRender } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Provider } from 'react-redux';

import appRouter from 'shared/configs/router';
import { rootReducer, rootSaga } from 'shared/configs/store';
import appTheme from 'shared/configs/theme';
import configureStore from 'shared/helpers/configureStore';
import createTestRouter from 'shared/helpers/createTestRouter';

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
