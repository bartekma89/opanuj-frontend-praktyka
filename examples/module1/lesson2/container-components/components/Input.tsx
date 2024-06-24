import { HTMLInputTypeAttribute } from 'react';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  className: string;
}

function Input({
  placeholder,
  onChange,
  value,
  className,
  type = 'text',
}: InputProps) {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
