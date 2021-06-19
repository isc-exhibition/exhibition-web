import React, { TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  register: any;
  required: boolean;
  name: string;
  className?: string;
}

const RHFTextarea = ({
  register, required, name, className, ...rest
}: Props) => (
  <textarea className={className} {...register(`${name}`, { required })} {...rest} />
);

export default RHFTextarea;
