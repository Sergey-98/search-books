import { createReducer, createAction } from '@reduxjs/toolkit';
import { State } from '../../types/types';

type DispatchType = {
  type?: string;
  payload?: State;
};

export const initialState = {
  searchValue: '',
  page: 1,
  categories: 'all',
  sorting: 'relevance',
  searchBooksList: [],
  totalItems: -1,
  bookData: {},
  isLoading: false,
} as State;

const UPDATE_SEARCH = 'UPDATE_SEARCH';
const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
const UPDATE_SORTING = 'UPDATE_SORTING';
const UPDATE_SEARCH_BOOK_LIST = 'UPDATE_SEARCH_BOOK_LIST';
const UPDATE_TOTAL_ITEMS = 'UPDATE_TOTAL_ITEMS';
const UPDATE_BOOK_DATA = 'UPDATE_BOOK_DATA';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_PAGE = 'SET_PAGE';

export const MainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(UPDATE_SEARCH, (state: State, action: DispatchType) => {
      state.searchValue = action.payload?.searchValue;
    })
    .addCase(UPDATE_CATEGORIES, (state: State, action: DispatchType) => {
      state.categories = action.payload?.categories;
    })
    .addCase(UPDATE_SORTING, (state: State, action: DispatchType) => {
      state.sorting = action.payload?.sorting;
    })
    .addCase(UPDATE_SEARCH_BOOK_LIST, (state: State, action: DispatchType) => {
      state.searchBooksList = action.payload?.searchBooksList;
    })
    .addCase(UPDATE_TOTAL_ITEMS, (state: State, action: DispatchType) => {
      state.totalItems = action.payload?.totalItems;
    })
    .addCase(UPDATE_BOOK_DATA, (state: State, action: DispatchType) => {
      state.bookData = action.payload?.bookData;
    })
    .addCase(SET_IS_LOADING, (state: State, action: DispatchType) => {
      state.isLoading = action.payload?.isLoading;
    })
    .addCase(SET_PAGE, (state: State, action: DispatchType) => {
      state.page = action.payload?.page;
    });
});

export const updateSearch = createAction<State>('UPDATE_SEARCH');
export const updateCategories = createAction<State>('UPDATE_CATEGORIES');
export const updateSorting = createAction<State>('UPDATE_SORTING');
export const updateSearchBookList = createAction<State>('UPDATE_SEARCH_BOOK_LIST');
export const updateTotalItems = createAction<State>('UPDATE_TOTAL_ITEMS');
export const updateBookData = createAction<State>('UPDATE_BOOK_DATA');
export const setIsLoading = createAction<State>('SET_IS_LOADING');
export const setPage = createAction<State>('SET_PAGE');

updateSearch({ searchValue: '' });
updateCategories({ categories: '' });
updateSorting({ sorting: '' });
updateSearchBookList({ searchBooksList: [] });
updateTotalItems({ totalItems: -1 });
updateBookData({ bookData: {} });
setIsLoading({ isLoading: false });
setPage({ page: 1 });
