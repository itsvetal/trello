import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IPostCardArgs } from '../../common/interfaces/ICard';
import instance from '../../api/request';
import { fetchBoard } from './boardThunks';
import { handleAxiosError } from '../../api/handleAxiosErr';

export interface IPostCard {
  result: string;
  id: number;
}

export const postCard = createAsyncThunk(
  'board/postCard',
  async (data: IPostCardArgs, { dispatch }): Promise<IPostCard> => {
    const toastId = toast.loading('Loading...');
    try {
      const response: IPostCard = await instance.post(`/board/${data.id}/card`, data.card);
      if (response.result === 'Created') {
        toast.update(toastId, {
          render: 'Card created',
          type: 'success',
          isLoading: false,
          autoClose: 2000,
        });
        dispatch(fetchBoard(data.id));
      }
      return response;
    } catch (err) {
      handleAxiosError(err, toastId);
      throw new Error();
    }
  }
);
