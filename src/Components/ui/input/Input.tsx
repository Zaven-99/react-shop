interface Input {
  className: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ className, type, value, onChange }: Input) => {
  return (
    <div>
      <input
        onChange={onChange}
        value={value}
        className={className}
        type={type}
        placeholder="Search "
      />
    </div>
  );
};

export default Input;
