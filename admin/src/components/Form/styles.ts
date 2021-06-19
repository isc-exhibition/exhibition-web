import { css } from '@emotion/react';
import { COLORS } from 'utils/theme';

export const inputStyle = css`
  cursor: auto;
  color: ${COLORS.gray};
  border-radius: 20px;
  padding: 4px 28px;
  background: #FFFFFF;
  border: 1px solid ${COLORS.lightGray};
  box-sizing: border-box;

  &:focus {
    outline: ${COLORS.orange};
  }
`;
