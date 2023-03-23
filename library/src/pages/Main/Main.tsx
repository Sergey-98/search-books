import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Main.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { State, BooksInfoType } from '../../types/types';
import Card from 'components/Card/Card';
import {
  updateBookData,
  setIsLoading,
  updateSearchBookList,
  setPage,
} from 'redux/reducers/MainReducer';
import { getBooks, getOneBook } from 'API/getService';

export default function Main() {
  const navigate = useNavigate();
  const stateValues = useSelector<RootState, State>((state) => state);
  const dispatchRedux = useDispatch();
  const openBook = async (bookID: string) => {
    dispatchRedux(setIsLoading({ isLoading: true }));
    const book = await getOneBook(bookID);
    dispatchRedux(updateBookData({ bookData: book.data.volumeInfo }));
    navigate(`/${bookID}`);
    dispatchRedux(setIsLoading({ isLoading: false }));
  };
  const loadBooks = async () => {
    if (stateValues.searchValue && stateValues.sorting && stateValues.page) {
      const newPage = stateValues.page + 1;
      dispatchRedux(setPage({ page: newPage }));
      dispatchRedux(setIsLoading({ isLoading: true }));
      const list = await getBooks(
        stateValues.searchValue,
        stateValues.sorting,
        newPage,
        stateValues.categories as string
      );
      if (stateValues.searchBooksList) {
        dispatchRedux(
          updateSearchBookList({
            searchBooksList: stateValues.searchBooksList?.concat(list.items),
          })
        );
      }
      dispatchRedux(setIsLoading({ isLoading: false }));
    }
  };
  return (
    <div className={styles.main_wrapper}>
      {!stateValues.searchBooksList ? (
        <h1 className={styles.main__total_items}>Данные не найдены</h1>
      ) : (
        <div className={styles.main_wrapper}>
          <span className={styles.main__total_items}>Found {stateValues.totalItems} results</span>
          <div className={styles.main__cards_wrapper}>
            {stateValues.searchBooksList?.map((elem: BooksInfoType, ID: number) => {
              return (
                <Card bookInfo={elem.volumeInfo} onOpenBook={() => openBook(elem.id)} key={ID} />
              );
            })}
          </div>
        </div>
      )}
      {stateValues.isLoading ? (
        <h1 className={styles.main__loading}>Загрузка...</h1>
      ) : (
        <button className={styles.main__load_more} onClick={loadBooks}>
          Load more...
        </button>
      )}
    </div>
  );
}
