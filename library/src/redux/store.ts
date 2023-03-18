import { configureStore } from '@reduxjs/toolkit';
import { mainReducer } from './reducers/reducers';

export const store = configureStore({
  reducer: mainReducer,
});

export type RootState = ReturnType<typeof store.getState>;
