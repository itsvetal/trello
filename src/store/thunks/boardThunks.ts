import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import {
  IBoard,
  IDetailBoard,
  IFetchBoardsResponse,
  IPostBoard,
  IPostBoardArgs,
  IPutBoard,
  IPutBoardArgs,
  IRemoveBoard,
} from '../../common/interfaces/boards';
import instance from '../../api/request';
import { api } from '../../common/constants';

export const fetchBoards = createAsyncThunk('boards/fetchBoards', async (path: string): Promise<IBoard[]> => {
  try {
    const response: IFetchBoardsResponse = await instance.get(path);
    return response.boards;
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response) {
        throw new Error(`Wrong route: ${path}`);
      } else if (err.request) {
        throw new Error(`Request by URL: ${api.baseURL} is failed`);
      }
    }
    throw new Error();
  }
});

export const postBoard = createAsyncThunk(
  'boards/postBoard',
  async (data: IPostBoardArgs, { dispatch }): Promise<IPostBoard> => {
    try {
      const response: IPostBoard = await instance.post(data.path, data.item);
      if (response.result === 'Created') {
        dispatch(fetchBoards('/board'));
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

export const removeBoard = createAsyncThunk(
  'boards/removeBoard',
  async (id: number, { dispatch }): Promise<IRemoveBoard> => {
    try {
      const response: IRemoveBoard = await instance.delete(`/board/${id}`);
      if (response.result === 'Deleted') {
        dispatch(fetchBoards('/board'));
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

export const fetchBoard = createAsyncThunk(
  'board/fetchBoard',
  async (id: string | undefined): Promise<IDetailBoard> => {
    try {
      return await instance.get(`board/${id}`);
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response) {
          throw new Error(`Board with ID not found: ${id}`);
        } else if (err.request) {
          throw new Error(`Request by URL: ${api.baseURL} is failed`);
        }
      }
      throw new Error();
    }
  }
);

export const putBoard = createAsyncThunk(
  'board/putBoard',
  async (data: IPutBoardArgs, { dispatch }): Promise<IPutBoard> => {
    try {
      const response: IPutBoard = await instance.put(`/board/${data.id}`, data.item);
      if (response.result === 'Updated') {
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
