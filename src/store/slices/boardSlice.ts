import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { IDetailBoard } from '../../common/interfaces/boards';
import instance from '../../api/request';
import { api } from '../../common/constants';

export interface IBoardSlice {
  board: IDetailBoard | null;
  status: string;
  error: string;
}

const initialState: IBoardSlice = {
  board: null,
  status: '',
  error: '',
};

export const fetchBoard = createAsyncThunk(
  'board/fetchBoard',
  async (id: string | undefined): Promise<IDetailBoard> => {
    try {
      return await instance.get(`board/${id}`);
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response) {
          throw new Error(`Wrong board ID: ${id}`);
        } else if (err.request) {
          throw new Error(`Request by URL: ${api.baseURL} is failed`);
        }
      }
      throw new Error();
    }
  }
);

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoard.pending, (state) => {
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    });
    builder.addCase(fetchBoard.fulfilled, (state, action) => {
      return {
        ...state,
        status: 'resolved',
        board: action.payload,
      };
    });
  },
});

export default boardSlice.reducer;
