interface Button {
  className: string;
  type: "submit" | "reset" | "button" | undefined;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}
const Button = ({ className, type, label, onClick, disabled }: Button) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={className}
    >
      {label}
    </button>
  );
};

export default Button;
