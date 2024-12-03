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
