import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBoardSlice } from '../../common/interfaces/boards';
import { fetchBoard } from '../thunks/boardThunks';

const initialState: IBoardSlice = {
  board: null,
  boardId: '',
  status: '',
  error: '',
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    getBoardId(state, action: PayloadAction<string>) {
      return {
        ...state,
        boardId: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBoard.pending, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.status = 'loading';
      // eslint-disable-next-line no-param-reassign
      state.error = '';
    });
    builder.addCase(fetchBoard.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.status = 'resolved';
      // eslint-disable-next-line no-param-reassign
      state.board = action.payload;
    });
    builder.addCase(fetchBoard.rejected, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.status = 'failed';
      // eslint-disable-next-line no-param-reassign
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default boardSlice.reducer;
export const { getBoardId } = boardSlice.actions;
