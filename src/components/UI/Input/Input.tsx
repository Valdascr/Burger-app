import React from 'react';

import classes from './Input.css';

interface InputOptionsKey {
  [option: string]: string;
}

interface InputElementConfigKey {
  [key: string]: boolean;
}

type OptionsVal = {
  key?: string;
  value?: string;
};

interface InputOptionsProps {
  invalid: boolean;
  shouldValidate: {};
  touched: boolean;
  changed?: (val: any) => void;
  value: string;
  label?: string;
  elementType: string;
  elementConfig: {};
}

const input = (props: InputOptionsProps) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          onChange={props.changed}
          value={props.value}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          onChange={props.changed}
          value={props.value}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option: InputOptionsKey) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          onChange={props.changed}
          value={props.value}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Lebel}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
