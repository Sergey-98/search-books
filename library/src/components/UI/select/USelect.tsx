import React from 'react';
import classes from './USelect.module.css';
import { SelectProps } from 'types/types';

export default function Select(props: SelectProps) {
  return (
    <select
      defaultValue={props.propsValues[0]}
      className={classes.select_wrapper}
      onChange={props.onChange}
    >
      <option value={props.propsValues[0]} className={classes.select__option}>
        {props.propsValues[0]}
      </option>
      {props.propsValues.slice(1).map((elem: string, id: number) => {
        return (
          <option value={elem} className={classes.select__option} key={id}>
            {elem}
          </option>
        );
      })}
    </select>
  );
}
