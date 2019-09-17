import React, { useState } from 'react';
import { Box, Button, Input, useToast } from '@chakra-ui/core';

const url = process.env.REACT_APP_API_URL;

const SUCCESS_SEND_MESSAGE = '送信が完了しました';

const FAILED_SEND_MESSAGE = '送信に失敗しました';

const FAILED_EMPTY_CONTENT_MESSAGE = 'コメントを入力してください';

function PostMessage() {
  const successToast = useToast();
  const errorToast = useToast();
  const [content, setContent] = useState('');

  const onChange = e => {
    const value = e.target.value;
    setContent(value);
  };

  const onClick = async () => {
    if (!content) {
      showErrorToast({ description: FAILED_EMPTY_CONTENT_MESSAGE });
      return;
    }
    const res = await fetch(`${url}/messages`, {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ content }),
    });
    if (res.ok) {
      showSuccessToast({ description: SUCCESS_SEND_MESSAGE });
      setContent('');
    } else {
      showErrorToast({ description: FAILED_SEND_MESSAGE });
    }
  };

  const showSuccessToast = ({ description }) => {
    successToast({
      description,
      status: 'success',
    });
  };

  const showErrorToast = ({ description }) => {
    errorToast({
      description,
      status: 'error',
    });
  };

  return (
    <Box p={4}>
      <Input mb={4} value={content} onChange={onChange} />
      <Button onClick={onClick} width="100%">
        送信
      </Button>
    </Box>
  );
}

export default PostMessage;
