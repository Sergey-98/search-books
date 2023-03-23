import React from 'react';
import styles from './Card.module.css';
import { PropsMainCard } from 'types/types';

export default function Card(props: PropsMainCard) {
  return (
    <div className={styles.card_wrapper} onClick={props.onOpenBook}>
      <div className={styles.card__img_wrapper}>
        {props.bookInfo?.imageLinks ? (
          <img src={props.bookInfo?.imageLinks.thumbnail} alt="" className={styles.card_img} />
        ) : (
          <div className={styles.card_img}></div>
        )}
      </div>
      <div className={styles.card__text_wrapper}>
        {props.bookInfo?.categories ? (
          <span className={styles.card_categories}>{props.bookInfo?.categories[0]}</span>
        ) : (
          ''
        )}
        {props.bookInfo?.title ? (
          <span className={styles.card_title}>{props.bookInfo?.title}</span>
        ) : (
          ''
        )}
        {props.bookInfo?.authors ? (
          <div className={styles.card_authors}>
            {props.bookInfo?.authors.map((elem, id) => {
              return <span key={id}>{elem}</span>;
            })}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
