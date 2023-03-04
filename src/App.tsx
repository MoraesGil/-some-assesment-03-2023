import React from 'react';
import { Container, InputField, Label } from './components';

const App: React.FC = () => {
  return (
    <Container>
      <Label htmlFor="users">Search by user name:</Label>
      <InputField />
    </Container>
  );
};

export default App;
