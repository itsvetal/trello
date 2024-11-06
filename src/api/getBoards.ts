import { AxiosResponse } from 'axios';
import instance from './request';
import { IBoards } from '../common/interfaces/IBoards';

export const getBoards = async (): Promise<AxiosResponse<IBoards>> => {
  return instance.get('/board');
};
