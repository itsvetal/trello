import instance from '../request';
import { IDetailBoard } from '../../common/interfaces/boards';

export interface IPutBoard {
  result: string;
}

export const putBoard = async (id: string | undefined, data: IDetailBoard): Promise<IPutBoard> => {
  return instance.put(`board/${id}`, data);
};
