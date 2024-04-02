// built-ins
import Container from '@mui/material/Container';
import { Route } from '@tanstack/router';

// enums
import { rootRoute } from 'src/app/App';

import Counter from 'features/Counter';
import WelcomeCard from 'features/WelcomeCard';

import Routes from 'shared/constants/routes.enum';

function Home() {
  return (
    <Container maxWidth={false} sx={{ display: 'flex', height: '100vh', placeContent: 'center' }}>
      <WelcomeCard title="Home Page" renderCounter={() => <Counter />} />
    </Container>
  );
}

// Index route
export const homeRoute = new Route({ component: Home, getParentRoute: () => rootRoute, path: Routes.HOME });

// Not Found route
export const notFoundRoute = new Route({ component: Home, getParentRoute: () => rootRoute, path: Routes.NOT_FOUND });

export default Home;
