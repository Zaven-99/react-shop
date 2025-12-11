interface Button {
  className: string;
  type: "submit" | "reset" | "button" | undefined;
  label: string;
  onClick?: () => void;
}
const Button = ({ className, type, label, onClick }: Button) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {label}
    </button>
  );
};

export default Button;
