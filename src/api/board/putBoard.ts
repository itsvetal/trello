import instance from '../request';
import { IBoard } from '../../common/interfaces/IBoards';

export interface IPutBoard {
  result: string;
}

export const putBoard = async (id: string | undefined, data: IBoard): Promise<IPutBoard> => {
  return instance.put(`board/${id}`, data);
};
