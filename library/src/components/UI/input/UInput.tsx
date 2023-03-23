import React from 'react';
import classes from './UInput.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { InputProps, State } from '../../../types/types';

export default function Input({
  onClickUpdate,
  onClickClear,
  onClickSearch,
  placeholder,
  onKeyDownEnter,
}: InputProps) {
  const stateValues = useSelector<RootState, State>((state) => state);
  return (
    <div className={classes.myInput_wrapper}>
      <input
        aria-label="searchPanel"
        className={classes.myInput}
        placeholder={placeholder}
        value={stateValues.searchValue}
        onChange={onClickUpdate}
        onKeyDown={onKeyDownEnter}
      />
      <button className={classes.myInput_searchButton} onClick={onClickSearch}></button>
      {(stateValues.searchValue ? stateValues.searchValue : '').length > 0 ? (
        <div className={classes.myInput_close} onClick={onClickClear}></div>
      ) : null}
    </div>
  );
}
