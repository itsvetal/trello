import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IBoard } from '../common/interfaces/IBoards';
import { getBoards } from '../api/board/getBoards';

interface IHomeHooksProps {
  items: IBoard[];
  loading: boolean;
  error: string;
  setUpdate: Dispatch<SetStateAction<boolean>>;
}

export const useHome = (): IHomeHooksProps => {
  const [items, setItems] = useState<IBoard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setLoading(true);
    getBoards('/board')
      .then((data) => {
        setItems(data.boards);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [update]);

  return { items, loading, error, setUpdate };
};
