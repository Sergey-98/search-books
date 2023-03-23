import React from 'react';
import styles from './OneBook.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { State } from '../../types/types';

export default function OneBook() {
  const stateValues = useSelector<RootState, State>((state) => state);
  console.log(stateValues.bookData);
  return (
    <div className={styles.one_book__wrapper}>
      <div className={styles.book__img_wrapper}>
        {stateValues.bookData?.imageLinks ? (
          <img
            src={stateValues.bookData?.imageLinks.thumbnail}
            alt=""
            className={styles.book_img}
          />
        ) : (
          <div className={styles.book_img}></div>
        )}
      </div>
      <div className={styles.book__text_wrapper}>
        {stateValues.bookData?.categories
          ? stateValues.bookData?.categories.map((elem, id) => {
              return (
                <span className={styles.book_categories} key={id}>
                  {elem}
                </span>
              );
            })
          : ''}
        {stateValues.bookData?.title ? (
          <span className={styles.book_title}>{stateValues.bookData?.title}</span>
        ) : (
          ''
        )}
        {stateValues.bookData?.authors ? (
          <div className={styles.book_authors}>
            {stateValues.bookData?.authors.map((elem, id) => {
              return <span key={id}>{elem}</span>;
            })}
          </div>
        ) : (
          ''
        )}
        {stateValues.bookData?.description ? (
          <span className={styles.book_description}>{stateValues.bookData?.description}</span>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
