/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes, memo } from 'react';
import { css } from '@emotion/react';
import { buttonStyle } from './style';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  orangeColor: boolean;
}

function Button(props: Props) {
  const { children, orangeColor, ...rest } = props;

  return (
    <button
      css={css`
        ${buttonStyle}
        background: ${orangeColor ? '#ED6837' : 'f#fffff'};
        color: ${orangeColor ? 'f#fffff' : '#ED6837'};
      `}
      {...rest}
    >
      {children}
    </button>
  );
}

export default memo(Button);
