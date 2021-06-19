import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: any;
  required: boolean;
  name: string;
  className?: string;
}

const RHFInput = ({
  register, required, name, className, ...rest
}: Props) => (
  <input className={className} {...register(`${name}`, { required })} {...rest} />
);

export default RHFInput;
