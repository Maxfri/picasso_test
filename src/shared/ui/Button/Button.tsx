import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classNames?: string;
}

export const Button = ({ classNames, children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  );
};
