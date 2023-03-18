import React from 'react';
import classes from './UInput.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearch } from '../../../redux/reducers/reducers';
import { RootState } from '../../../redux/store';
import { State } from '../../../types/types';

export default function Input(props: { placeholder: string }) {
  const stateValues = useSelector<RootState, State>((state) => state);
  const dispatchRedux = useDispatch();
  const updateSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchRedux(updateSearch({ searchValue: event.target.value }));
    console.log(stateValues);
  };
  const clearSearchValue = () => {
    console.log(stateValues);
    dispatchRedux(updateSearch({ searchValue: '' }));
  };

  return (
    <div className={classes.myInput_wrapper}>
      <button className={classes.myInput_searchButton}></button>
      <input
        aria-label="searchPanel"
        className={classes.myInput}
        {...props}
        value={stateValues.searchValue}
        onChange={updateSearchValue}
      />
      {(stateValues.searchValue ? stateValues.searchValue : '').length > 0 ? (
        <div className={classes.myInput_close} onClick={clearSearchValue}>
          close
        </div>
      ) : null}
    </div>
  );
}
