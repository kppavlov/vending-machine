import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
} from "react";

import "./button.scss";

export const Button: FC<
  PropsWithChildren<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  >
> = ({ children, className, ...rest }) => (
  <button {...rest} className={`button ${className}`}>
    {children}
  </button>
);
