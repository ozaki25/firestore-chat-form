import React from 'react';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import PostMessage from './PostMessage';

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <PostMessage />
    </ThemeProvider>
  );
}

export default App;
