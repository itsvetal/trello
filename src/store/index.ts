import { configureStore } from '@reduxjs/toolkit';
import boardsReducer from './slices/homeBoardsSlice';
import boardReducer from './slices/boardSlice';

const store = configureStore({
  reducer: {
    boards: boardsReducer,
    board: boardReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
