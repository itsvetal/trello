import { AxiosError } from 'axios';
import { IBoards } from '../../common/interfaces/IBoards';
import instance from '../request';

export const getBoards = async (path: string): Promise<IBoards> => {
  try {
    return await instance.get(path);
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err?.response?.data);
    } else if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error('Error getting boards');
  }
};
