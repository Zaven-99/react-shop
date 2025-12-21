interface Input {
  className: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
const Input = ({ className, type, value, onChange, placeholder }: Input) => {
  return (
    <div>
      <input
        onChange={onChange}
        value={value}
        className={className}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
