import { useEffect, useState } from 'react';
import { IBoards } from '../common/interfaces/IBoards';
import { getBoards } from '../api/getBoards';

interface IHomeHooksProps {
  items: IBoards | null;
  loading: boolean;
  error: string;
}

export const useHome = (): IHomeHooksProps => {
  const [items, setItems] = useState<IBoards | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    getBoards()
      .then((response) => setItems(response.data))
      .catch((err) => setError(err.message));
    setLoading(false);
  }, []);

  return { items, loading, error };
};
