import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { IPostCardArgs } from '../../common/interfaces/ICard';
import instance from '../../api/request';
import { fetchBoard } from './boardThunks';

export interface IPostCard {
  result: string;
  id: number;
}

export const postCard = createAsyncThunk(
  'board/postCard',
  async (data: IPostCardArgs, { dispatch }): Promise<IPostCard> => {
    try {
      const response: IPostCard = await instance.post(`/board/${data.id}/card`, data.card);
      if (response.result === 'Created') {
        dispatch(fetchBoard(data.id));
      }
      return response;
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response) {
          throw new Error('Response error');
        } else if (err.request) {
          throw new Error('Request error');
        }
      }
      throw new Error();
    }
  }
);
