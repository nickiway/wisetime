interface ButtonProps {
  clickHandler: () => void;
  cutomClasses: string;
  label: string;
}

const Button = ({ clickHandler, cutomClasses, label }: ButtonProps) => {
  return (
    <button className={"btn" + " " + cutomClasses} onClick={clickHandler}>
      {label}
    </button>
  );
};

export default Button;
