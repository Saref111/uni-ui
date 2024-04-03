import { Box } from '@mui/material';

import MessageForm from './ui/MessageForm';
import MessageList from './ui/MessageList';

export default function Chat() {
  return (
    <Box>
      <MessageList />
      <MessageForm />
    </Box>
  );
}
