import { useCallback } from 'react';
import { apiClient, Config, Endpoint } from '../infra';

export const useApiClient = <T>() => {
  return useCallback(
    (endpoint: Endpoint, config: Config = {}) => apiClient<T>(endpoint, config),
    []
  );
};
