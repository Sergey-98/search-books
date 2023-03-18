import React from 'react';
import styles from './Header.module.css';
import Input from 'components/UI/input/UInput';
import Select from 'components/UI/select/USelect';

import { useDispatch, useSelector } from 'react-redux';
import { updateCategories, updateSorting } from '../../redux/reducers/reducers';
import { RootState } from '../../redux/store';
import { State } from '../../types/types';

export default function Header() {
  const stateValues = useSelector<RootState, State>((state) => state);
  const dispatchRedux = useDispatch();
  const updateCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatchRedux(updateCategories({ categories: event.target.value }));
    console.log(stateValues);
  };
  const updateSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatchRedux(updateSorting({ sorting: event.target.value }));
    console.log(stateValues);
  };
  return (
    <header className={styles.header_wraper}>
      <span className={styles.header_title}>Search for books</span>
      <Input placeholder="Search Book" />
      <div className={styles.header__select_wrapper}>
        <Select
          propsValues={['all', 'art', 'biography', 'computers', 'history', 'medical', 'poety']}
          onChange={updateCategory}
          name={'categories'}
          title={'Categories'}
        />
        <Select
          propsValues={['relevance', 'newest']}
          onChange={updateSort}
          name={'sorting'}
          title={'Sorting by'}
        />
      </div>
    </header>
  );
}
