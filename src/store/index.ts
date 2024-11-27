import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './homeBoardsSlice';

const store = configureStore({
  reducer: {
    boards: boardReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
