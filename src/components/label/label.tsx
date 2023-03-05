import React from 'react';
import './label.css';

export type LabelProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'label'>;

export const Label: React.FC<LabelProps> = ({ children, ...rest }) => {
  return (
    <label className="label" {...rest}>
      {children}
    </label>
  );
};
