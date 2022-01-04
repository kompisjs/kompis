import React from 'react';
import ReactSelect from 'react-select';

export type Props = {
  options: string[];
  onChange: (value: string) => void;
  value: string;
}

type SelectOption = {
  value: string; 
  label: string;
}

const formatOptions = (options: string[]): SelectOption[] => {
  return options.map(option => ({ value: option, label: option }));
}

const Select: React.FC<Props> = ({ options, onChange, value }) => {
  return (
    <ReactSelect options={formatOptions(options)} defaultValue={value} onChange={(value: SelectOption) => {
      onChange(value?.value)
    }} />
  );
}

Select.displayName = "Select";

export default Select;