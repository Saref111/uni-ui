// built-ins
import Container from '@mui/material/Container';

import Counter from 'features/Counter';
import WelcomeCard from 'features/WelcomeCard';

function Home() {
  return (
    <Container maxWidth={false} sx={{ display: 'flex', height: '100vh', placeContent: 'center' }}>
      <WelcomeCard title="Home Page" renderCounter={() => <Counter />} />
    </Container>
  );
}

export default Home;
