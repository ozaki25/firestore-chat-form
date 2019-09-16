import React from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import { Button } from '@chakra-ui/core';

function App() {
  return (
    <ThemeProvider>
      <Button variantColor="green">Hello</Button>
    </ThemeProvider>
  );
}

export default App;
