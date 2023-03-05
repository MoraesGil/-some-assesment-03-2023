import React, { useMemo, useState } from 'react';
import { Container, AutoComplete, Label, OptionType } from './components';
import { useDebounce, useGitHubUsersSearch } from './hooks';

const App: React.FC = () => {
  const MIN_SEARCH_LENGTH = 1;
  const NEXT_SEARCH_DELAY = 250;

  const [value, setValue] = useState<OptionType | undefined>();

  const handleSelect = (value?: OptionType) => setValue(value);

  const [query, setQuery] = useState('');

  const debouncedQuery = useDebounce(query, NEXT_SEARCH_DELAY);

  const shouldQueryUsers = debouncedQuery.length >= MIN_SEARCH_LENGTH;

  const { data: users, isLoading } = useGitHubUsersSearch(debouncedQuery, {
    enabled: shouldQueryUsers,
  });

  const handleChangeTextField = (value: string) => setQuery(value);

  const userOptions = useMemo(
    () => users.map((user) => ({ value: user.id, label: user.login })),
    [users]
  );

  return (
    <Container>
      <Label htmlFor="users">Search by user name:</Label>
      <AutoComplete
        id="users"
        loading={isLoading}
        onChange={handleChangeTextField}
        onSelect={handleSelect}
        options={userOptions}
        placeholder="Example: MoraesGil"
        value={value}
      />
      {value && (
        <pre>
          <code>
            {JSON.stringify({ id: value.value, username: value.label })}
          </code>
        </pre>
      )}
    </Container>
  );
};

export default App;
