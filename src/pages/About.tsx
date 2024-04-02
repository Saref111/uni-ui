// built-ins
import Container from '@mui/material/Container';
import { Route } from '@tanstack/router';

// material ui components

// enums
import { rootRoute } from 'src/app/App';

import Counter from 'features/Counter';
import WelcomeCard from 'features/WelcomeCard';

import Routes from 'shared/constants/routes.enum';

// features

// routes

function About() {
  return (
    <Container maxWidth={false} sx={{ display: 'flex', height: '100vh', placeContent: 'center' }}>
      <WelcomeCard title="About Page" renderCounter={() => <Counter />} />
    </Container>
  );
}

// About route
export const aboutRoute = new Route({ component: About, getParentRoute: () => rootRoute, path: Routes.ABOUT });

export default About;
