import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { IBoard, IBoardsResponse, IHomeBoardsState } from '../common/interfaces/IBoards';
import instance from '../api/request';
import { IPostBoard } from '../common/interfaces/IPostBoard';
import { api } from '../common/constants';

const initialState: IHomeBoardsState = {
  list: [],
  status: '',
  error: '',
};

export const fetchBoards = createAsyncThunk('boards/fetchBoards', async (path: string): Promise<IBoard[]> => {
  try {
    const response: IBoardsResponse = await instance.get(path);
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

export interface IPostBoardData {
  item: IBoard;
  path: string;
}

export const postBoard = createAsyncThunk(
  'boards/postBoard',
  async (data: IPostBoardData, { dispatch }): Promise<IPostBoard> => {
    try {
      const response: IPostBoard = await instance.post(data.path, data.item);
      if (response.result === 'Created') {
        dispatch(fetchBoards('/board'));
      }
      return await instance.post(data.path, data.item);
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

const homeBoardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoards.pending, (state) => {
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    });
    builder.addCase(fetchBoards.fulfilled, (state, action) => {
      return {
        ...state,
        status: 'resolved',
        list: action.payload,
      };
    });
    builder.addCase(fetchBoards.rejected, (state, action) => {
      return {
        ...state,
        status: 'failed',
        error: action.error.message || 'Something went wrong',
      };
    });
  },
});

export default homeBoardsSlice.reducer;
