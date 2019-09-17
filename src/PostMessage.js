import React from 'react';
import { Box, Button, Input } from '@chakra-ui/core';

const url = process.env.REACT_APP_API_URL;

function PostMessage() {
  const onClick = async () => {
    fetch(`${url}/messages`, {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ content: 'Hello' }),
    });
  };
  return (
    <Box p={4}>
      <Input mb={4} />
      <Button onClick={onClick} width="100%">
        送信
      </Button>
    </Box>
  );
}

export default PostMessage;
