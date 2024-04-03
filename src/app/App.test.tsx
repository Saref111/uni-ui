import appRouter from 'src/app/router';

import render, { describe, expect, it, screen } from 'shared/libs/vitest';

// configs

describe('App', () => {
  beforeEach(async () => {
    await render(undefined, { router: appRouter });
  });

  it('should render Home Page by root route', () => {
    expect(screen.getByRole('heading', { name: /home page/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /vite react typescript template/i })).toBeInTheDocument();
  });
});
