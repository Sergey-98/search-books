import { createReducer, createAction } from '@reduxjs/toolkit';
import { State } from '../../types/types';

type DispatchType = {
  type?: string;
  payload?: State;
};

export const initialState = {
  searchValue: '',
  categories: 'all',
  sorting: 'relevance',
} as State;

const UPDATE_SEARCH = 'UPDATE_SEARCH';
const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
const UPDATE_SORTING = 'UPDATE_SORTING';

export const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(UPDATE_SEARCH, (state: State, action: DispatchType) => {
      state.searchValue = action.payload?.searchValue;
    })
    .addCase(UPDATE_CATEGORIES, (state: State, action: DispatchType) => {
      state.categories = action.payload?.categories;
    })
    .addCase(UPDATE_SORTING, (state: State, action: DispatchType) => {
      state.sorting = action.payload?.sorting;
    });
});

export const updateSearch = createAction<State>('UPDATE_SEARCH');
export const updateCategories = createAction<State>('UPDATE_CATEGORIES');
export const updateSorting = createAction<State>('UPDATE_SORTING');

updateSearch({ searchValue: '' });
updateCategories({ categories: '' });
updateSorting({ sorting: '' });
