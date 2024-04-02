import Counter from 'features/Counter';
import WelcomeCard from 'features/WelcomeCard';

import render, { describe, expect, it, screen } from 'shared/libs/vitest';

// components

// helpers

describe('Welcome Card Feature Test Suite', () => {
  it('should render welcome card with title', async () => {
    const title = 'WelcomeCard';

    await render(<WelcomeCard title={title} renderCounter={() => null} />);

    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
  });

  it('should render Counter component', async () => {
    const { container } = await render(<WelcomeCard title="WelcomeCard" renderCounter={() => <Counter />} />);

    expect(container.querySelector('.Counter')).toBeInTheDocument();
  });
});
