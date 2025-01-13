import { createSlice } from '@reduxjs/toolkit';
import { IHomeBoardsSlice } from '../../common/interfaces/boards';
import { fetchBoards, postBoard } from '../thunks/boardThunks';

const initialState: IHomeBoardsSlice = {
  list: [],
  status: '',
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
      };
    });
    builder.addCase(fetchBoards.fulfilled, (state, action) => {
      return {
        ...state,
        status: 'resolved',
        list: action.payload,
      };
    });
    builder.addCase(fetchBoards.rejected, (state) => {
      return {
        ...state,
        status: 'failed',
      };
    });
    builder.addCase(postBoard.rejected, (state) => {
      return {
        ...state,
        status: 'failed',
      };
    });
  },
});

export default homeBoardsSlice.reducer;
