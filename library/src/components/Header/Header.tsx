import React from 'react';
import styles from './Header.module.css';
import { getBooks } from 'API/getService';
import Input from 'components/UI/input/UInput';
import Select from 'components/UI/select/USelect';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateSearch,
  updateCategories,
  updateSorting,
  updateSearchBookList,
  updateTotalItems,
  setIsLoading,
} from '../../redux/reducers/MainReducer';
import { RootState } from '../../redux/store';
import { State } from '../../types/types';

export default function Header() {
  const stateValues = useSelector<RootState, State>((state) => state);
  const dispatchRedux = useDispatch();
  const updateSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchRedux(updateSearch({ searchValue: event.target.value }));
  };
  const clearSearchValue = () => {
    dispatchRedux(updateSearch({ searchValue: '' }));
  };
  const updateCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatchRedux(updateCategories({ categories: event.target.value }));
    searchBooks();
  };
  const updateSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatchRedux(updateSorting({ sorting: event.target.value }));
    searchBooks();
  };
  const searchBooks = async () => {
    if (!stateValues.searchBooksList) {
      dispatchRedux(updateTotalItems({ totalItems: -1 }));
    }
    if (stateValues.searchValue && stateValues.sorting) {
      dispatchRedux(setIsLoading({ isLoading: true }));
      const list = await getBooks(
        stateValues.searchValue,
        stateValues.sorting,
        stateValues.page as number,
        stateValues.categories as string
      );
      dispatchRedux(
        updateSearchBookList({
          searchBooksList: list.items,
        })
      );
      // if (stateValues.searchBooksList) {
      //   dispatchRedux(
      //     updateSearchBookList({
      //       searchBooksList: list.items,
      //     })
      //   );
      // }
      dispatchRedux(updateTotalItems({ totalItems: list.totalItems }));
      dispatchRedux(setIsLoading({ isLoading: false }));
    }
  };
  const keyDownEnterEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      searchBooks();
    }
  };
  return (
    <header className={styles.header_wrapper}>
      <span className={styles.header_title}>Search for books</span>
      <Input
        placeholder="Search Book"
        onClickUpdate={updateSearchValue}
        onClickClear={clearSearchValue}
        onClickSearch={searchBooks}
        onKeyDownEnter={keyDownEnterEnter}
      />
      <div className={styles.header__select_wrapper}>
        <div className={styles.select_wrapper}>
          <span className={styles.select_title}>Category</span>
          <Select
            propsValues={['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']}
            onChange={updateCategory}
            name={'categories'}
            title={'Categories'}
          />
        </div>
        <div className={styles.select_wrapper}>
          <span className={styles.select_title}>Sorting By</span>
          <Select
            propsValues={['relevance', 'newest']}
            onChange={updateSort}
            name={'sorting'}
            title={'Sorting by'}
          />
        </div>
      </div>
    </header>
  );
}
