import { createSlice } from '@reduxjs/toolkit';
import { IHomeBoardsSlice } from '../../common/interfaces/boards';
import { fetchBoards, postBoard } from '../thunks/boardThunks';

const initialState: IHomeBoardsSlice = {
  list: [],
  status: '',
  error: '',
};

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
    builder.addCase(postBoard.rejected, (state, action) => {
      return {
        ...state,
        status: 'failed',
        error: action.error.message || 'Something went wrong',
      };
    });
  },
});

export default homeBoardsSlice.reducer;
