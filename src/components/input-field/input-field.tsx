import React from 'react';
import './input-field.css';

export type InputFieldProps = React.ComponentPropsWithoutRef<'input'>;

export const InputField: React.FC<InputFieldProps> = ({
  className,
  ...rest
}) => {
  return (
    <input className={`input-field ${className ? className : ''}`} {...rest} />
  );
};
