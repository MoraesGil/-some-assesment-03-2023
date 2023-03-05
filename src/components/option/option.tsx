import React from 'react';
import './option.css';

export type OptionType = {
  label: string;
  value: string;
};

export interface OptionProps {
  onSelect?: (option: OptionType) => void;
  children: React.ReactNode;
  disabled?: boolean;
  option?: OptionType;
  selected?: boolean;
}

export const Option: React.FC<OptionProps> = ({
  children,
  disabled = false,
  onSelect,
  option,
  selected = false,
}) => {
  const handleSelect = () => {
    if (onSelect && option && !disabled) {
      onSelect(option);
    }
  };

  return (
    <div
      className={`option ${disabled ? 'option--disabled' : ''}`}
      aria-disabled={disabled}
      aria-selected={selected}
      onClick={handleSelect}
      role="option"
    >
      {children}
    </div>
  );
};
