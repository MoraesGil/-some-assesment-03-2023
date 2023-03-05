import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import {
  Box,
  InputField,
  OptionType,
  Option,
  HighlightedText,
} from '../../components';
import './auto-complete.css';

export interface AutoCompleteProps {
  onChange?: (value: string) => void;
  onSelect?: (option?: OptionType) => void;
  id?: string;
  isOpen?: boolean;
  loading?: boolean;
  noOptionsText?: string;
  noResultsText?: string;
  options?: Array<OptionType>;
  placeholder?: string;
  value?: OptionType;
}

export const AutoComplete: React.FC<AutoCompleteProps> = ({
  onChange,
  onSelect,
  id,
  loading,
  noOptionsText = 'No option availiable.',
  noResultsText = 'No Results availiable.',
  options,
  placeholder,
  value,
}) => {
  const autoCompleteRef = useRef<HTMLDivElement>(null);

  const [textFieldValue, setTextFieldValue] = useState(value?.label ?? '');

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (!autoCompleteRef?.current?.contains(event.target as HTMLElement)) {
        setIsDropdownOpen(false);
      }
    },
    [setIsDropdownOpen]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleFocusEvent = () => setIsDropdownOpen(true);

  const handleBlurEvent = () => {
    if (value && textFieldValue.length) {
      if (onChange) {
        onChange(value.label);
      }
      return setTextFieldValue(value.label);
    }
    if (onSelect) {
      return onSelect(undefined);
    }
  };

  const handleSelect = (option: OptionType) => {
    setTextFieldValue(option.label);
    setIsDropdownOpen(false);
    if (onChange) {
      onChange(option.label);
    }
    if (onSelect) {
      onSelect(option);
    }
  };

  const renderOptions = () => {
    if (loading) {
      return <Option disabled>Loading...</Option>;
    }

    if (options?.length && textFieldValue.length) {
      return options?.map((option) => {
        const isSelected = value?.value === option.value;
        return (
          <Option
            key={option.value}
            option={option}
            onSelect={handleSelect}
            selected={isSelected}
          >
            <HighlightedText text={option.label} highlight={textFieldValue} />
          </Option>
        );
      });
    }

    return (
      <Option disabled>
        {textFieldValue.length ? noResultsText : noOptionsText}
      </Option>
    );
  };

  const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    if (onChange) {
      onChange(text);
    }
    setTextFieldValue(text);
  };

  return (
    <div className="auto-complete" ref={autoCompleteRef}>
      <div className="auto-complete__field-holder">
        <InputField
          id={id}
          value={textFieldValue}
          autoComplete="off"
          className="complete__text-field"
          onBlur={handleBlurEvent}
          onChange={handleTextFieldChange}
          onFocus={handleFocusEvent}
          placeholder={placeholder}
        />
      </div>
      {isDropdownOpen && (
        <Box className="auto-complete__dropdown" role="listbox">
          {renderOptions()}
        </Box>
      )}
    </div>
  );
};
