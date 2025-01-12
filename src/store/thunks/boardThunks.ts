import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
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
import { handleAxiosError } from '../../api/handleAxiosErr';

export const fetchBoards = createAsyncThunk('boards/fetchBoards', async (path: string): Promise<IBoard[]> => {
  const toastId = toast.loading('Loading...');
  try {
    const response: IFetchBoardsResponse = await instance.get(path);
    toast.update(toastId, {
      render: 'Boards loaded',
      type: 'success',
      isLoading: false,
      autoClose: 2000,
    });
    return response.boards;
  } catch (err) {
    handleAxiosError(err, toastId);
    throw new Error();
  }
});

export const postBoard = createAsyncThunk(
  'boards/postBoard',
  async (data: IPostBoardArgs, { dispatch }): Promise<IPostBoard> => {
    const toastId = toast.loading('Loading...');
    try {
      const response: IPostBoard = await instance.post(data.path, data.item);
      if (response.result === 'Created') {
        toast.update(toastId, {
          render: 'Board created',
          type: 'success',
          isLoading: false,
          autoClose: 2000,
        });
        dispatch(fetchBoards('/board'));
      }
      return response;
    } catch (err) {
      handleAxiosError(err, toastId);
      throw new Error();
    }
  }
);

export const removeBoard = createAsyncThunk(
  'boards/removeBoard',
  async (id: number, { dispatch }): Promise<IRemoveBoard> => {
    const toastId = toast.loading('Loading...');
    try {
      const response: IRemoveBoard = await instance.delete(`/board/${id}`);
      if (response.result === 'Deleted') {
        toast.update(toastId, {
          render: 'Board deleted',
          type: 'success',
          isLoading: false,
          autoClose: 2000,
        });
        dispatch(fetchBoards('/board'));
      }
      return response;
    } catch (err) {
      handleAxiosError(err, toastId);
      throw new Error();
    }
  }
);

export const fetchBoard = createAsyncThunk(
  'board/fetchBoard',
  async (id: string | undefined): Promise<IDetailBoard> => {
    const toastId = toast.loading('Loading...');
    try {
      const response: IDetailBoard = await instance.get(`board/${id}`);
      toast.update(toastId, {
        render: 'Board loaded',
        type: 'success',
        isLoading: false,
        autoClose: 2000,
      });
      return response;
    } catch (err) {
      handleAxiosError(err, toastId);
      throw new Error();
    }
  }
);

export const putBoard = createAsyncThunk(
  'board/putBoard',
  async (data: IPutBoardArgs, { dispatch }): Promise<IPutBoard> => {
    const toastId = toast.loading('Loading...');
    try {
      const response: IPutBoard = await instance.put(`/board/${data.id}`, data.item);
      if (response.result === 'Updated') {
        toast.update(toastId, {
          render: 'Board updated',
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
