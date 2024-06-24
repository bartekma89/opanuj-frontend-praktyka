import { SelectOptions } from '../lib/selectOptions';

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  className: string;
  options: SelectOptions;
}

function Select({ value, onChange, className, options }: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
    >
      {options.map(({ label, value }) => (
        <option key={`${label}-${value}`} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default Select;
