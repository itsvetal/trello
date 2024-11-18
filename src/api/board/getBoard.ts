import { AxiosError } from 'axios';
import instance from '../request';
import { IDetailBoard } from '../../common/interfaces/IBoards';

export const getBoard = async (data: string | undefined): Promise<IDetailBoard> => {
  try {
    return await instance.get(`board/${data}`);
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err?.response?.data);
    } else if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
  throw new Error('Error getting single board');
};
