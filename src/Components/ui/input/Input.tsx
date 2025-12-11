interface Input {
  className: string;
  type: string;
}
const Input = ({ className, type }: Input) => {
  return (
    <div>
      <input className={className} type={type} placeholder="Search " />
    </div>
  );
};

export default Input;
