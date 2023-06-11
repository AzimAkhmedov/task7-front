import {ChangeEventHandler} from "react";

interface IInputProps {
  name: string;
  placeholder: string;
  value: any;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
const Input = ({ name, placeholder, value, onChange }: IInputProps) => {
  return (
    <input
      autoComplete="off"
      type="text"
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
