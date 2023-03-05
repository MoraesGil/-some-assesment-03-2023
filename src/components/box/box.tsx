import { ComponentPropsWithoutRef } from 'react';
import './box.css';

type BoxProps = {
  children: React.ReactNode;
} & ComponentPropsWithoutRef<'div'>;

export const Box: React.FC<BoxProps> = ({ children, className, ...rest }) => {
  return (
    <div className={`box ${className ? className : ''}`} {...rest}>
      {children}
    </div>
  );
};
