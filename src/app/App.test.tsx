import appRouter from 'shared/configs/router';
import render, { describe, expect, it, screen, userEvent } from 'shared/libs/vitest';

// configs

describe('App', () => {
  beforeEach(async () => {
    await render(undefined, { router: appRouter });
  });

  it('should render Home Page by root route', () => {
    expect(screen.getByRole('heading', { name: /home page/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /vite react typescript template/i })).toBeInTheDocument();
  });

  it('should render About Page on clicking about link', async () => {
    await userEvent.click(screen.getByRole('link', { name: /about/i }));

    expect(screen.getByRole('heading', { name: /about page/i })).toBeInTheDocument();
  });
});
