/* eslint-disable no-unused-vars */
import React, { InputHTMLAttributes, memo } from 'react';
import { css } from '@emotion/react';
import { inputStyle } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  handleEnter?: () => void;
  handleChange?: (value: string) => void;
}

function Input({ handleChange, handleEnter, ...rest }: Props) {
  return (
    <input
      css={css`
        ${inputStyle}
      `}
      onChange={(e) => handleChange && handleChange(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleEnter}
      {...rest}
    />
  );
}

export default memo(Input);
