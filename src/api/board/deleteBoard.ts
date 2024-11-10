import { AxiosResponse } from 'axios';
import { IDeleteBoard } from '../../common/interfaces/IDeleteBoard';
import instance from '../request';

export const deleteBoard = async (id: string): Promise<AxiosResponse<IDeleteBoard>> => {
  return instance.delete(`/board/${id}`);
};
