import { useEffect, useState } from 'react';
import { useApiClient } from './use-api-client';

interface ApiResponse<T> {
  total_count: number;
  incomplete_results: boolean;
  items: T[];
}

export type User = {
  id: string;
  login: string;
};

export const useGitHubUsersSearch = (
  query: string,
  options: {
    enabled?: boolean;
  }
) => {
  const apiClient = useApiClient();

  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState<Array<User>>([]);

  const { enabled = true } = options;

  useEffect(() => {
    let didCancel = false;

    const searchUsers = async () => {
      try {
        if (!didCancel) {
          setIsLoading(true);
        }
        const response = await apiClient(`/users?q=${query}`);
        const users = (response as ApiResponse<User>).items;
        if (!didCancel) {
          setData(users);
        }
      } catch (error) {
        if (!didCancel) {
          setData([]);
        }
      } finally {
        if (!didCancel) {
          setIsLoading(false);
        }
      }
    };

    if (enabled) {
      searchUsers();
    } else {
      setData([]);
    }

    return () => {
      didCancel = true;
    };
  }, [apiClient, enabled, query]);

  return {
    data,
    isLoading,
  };
};
