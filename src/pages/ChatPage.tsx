// built-ins
import Container from '@mui/material/Container';

import Chat from 'src/widgets/Chat';

function ChatPage() {
  return (
    <Container maxWidth={false} sx={{ display: 'flex', height: '100vh', paddingTop: '50px', placeContent: 'center' }}>
      <Chat />
    </Container>
  );
}

export default ChatPage;
