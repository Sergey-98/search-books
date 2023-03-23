import { configureStore } from '@reduxjs/toolkit';
import { MainReducer } from './reducers/MainReducer';

export const store = configureStore({
  reducer: MainReducer,
});

export type RootState = ReturnType<typeof store.getState>;
