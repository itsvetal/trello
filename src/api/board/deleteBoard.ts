import { IDeleteBoard } from '../../common/interfaces/IDeleteBoard';
import instance from '../request';

export const deleteBoard = async (id: string): Promise<IDeleteBoard> => {
  return instance.delete(`/board/${id}`);
};
