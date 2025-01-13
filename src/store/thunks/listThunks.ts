import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IPostList, IPostListArgs } from '../../common/interfaces/lists';
import instance from '../../api/request';
import { fetchBoard } from './boardThunks';
import { handleAxiosError } from '../../api/handleAxiosErr';

export const postList = createAsyncThunk(
  'list/postList',
  async (data: IPostListArgs, { dispatch }): Promise<IPostList> => {
    const toastId = toast.loading('Loading...');
    try {
      const response: IPostList = await instance.post(`/board/${data.id}/list`, data.item);
      if (response.result === 'Created') {
        toast.update(toastId, {
          render: 'List created',
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

export interface IRemoveListArgs {
  boardId: string | undefined;
  listId: number;
}

export interface IRemoveList {
  result: string;
}

export const removeList = createAsyncThunk(
  'list/removeList',
  async (data: IRemoveListArgs, { dispatch }): Promise<IRemoveList> => {
    const toastId = toast.loading('Loading...');
    try {
      const response: IRemoveList = await instance.delete(`board/${data.boardId}/list/${data.listId}`);
      if (response.result === 'Deleted') {
        toast.update(toastId, {
          render: 'List deleted',
          type: 'success',
          isLoading: false,
          autoClose: 2000,
        });
        dispatch(fetchBoard(data.boardId));
      }
      return response;
    } catch (err) {
      handleAxiosError(err, toastId);
      throw new Error();
    }
  }
);
