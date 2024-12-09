import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { IPostList, IPostListArgs } from '../../common/interfaces/lists';
import instance from '../../api/request';
import { fetchBoard } from './boardThunks';

export const postList = createAsyncThunk(
  'list/postList',
  async (data: IPostListArgs, { dispatch }): Promise<IPostList> => {
    try {
      const response: IPostList = await instance.post(`/board/${data.id}/list`, data.item);
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
    try {
      const response: IRemoveList = await instance.delete(`board/${data.boardId}/list/${data.listId}`);
      if (response.result === 'Deleted') {
        dispatch(fetchBoard(data.boardId));
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
