import React, { useState } from 'react';
import { Container, AutoComplete, Label, OptionType } from './components';

const App: React.FC = () => {
  const [value, setValue] = useState<OptionType | undefined>();

  const handleSelect = (value?: OptionType) => setValue(value);

  return (
    <Container>
      <Label htmlFor="users">Search by user name:</Label>
      <AutoComplete
        onSelect={handleSelect}
        noOptionsText="type some query"
        options={[
          { label: 'MoraesGil', value: '1' },
          { label: 'Icarus', value: '2' },
          { label: 'Vava', value: '3' },
        ]}
        placeholder="Example: MoraesGil"
        value={value}
      />
      {value && (
        <pre>
          <code>{JSON.stringify(value)}</code>
        </pre>
      )}
    </Container>
  );
};

export default App;
