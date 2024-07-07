import { useEffect, useState } from 'react';

import axios, { AxiosError } from 'axios';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

export const useUsersClient = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isTimeoutError, setIsTimeoutError] = useState<boolean>(false);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<{ users: User[] }>(API_URL, {
        timeout: 5000,
      });
      setUsers(response.data.users);
    } catch (e: any) {
      const error: AxiosError = e;
      if (error.code === 'ECONNABORTED') {
        setIsTimeoutError(true);
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const retryRequest = () => {
    setIsTimeoutError(false);
    fetchUsers();
  };

  return {
    users,
    isTimeoutError,
    retryRequest,
  };
};
