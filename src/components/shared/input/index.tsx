import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

import "./input.scss";

export const Input: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ className, ...rest }) => (
  <input {...rest} className={`input ${className}`} />
);
