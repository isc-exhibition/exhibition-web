import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { COLORS } from '../../utils/theme';

interface Props {
  index: number;
  children: JSX.Element;
}

const rowStyle = css`
  display: flex;
  margin: 10px 0;
`;

function AssignmentRow({ index, children }: Props) {
  const backgroundColor = (index + 1) % 2 === 0 ? COLORS.paleGray : 'white';
  const padding = (index + 1) % 2 === 0 ? '20px 35px' : '10px 35px';

  return (
    <div css={css`${rowStyle} padding: ${padding}; background-color: ${backgroundColor};`}>{children}</div>
  );
}

export default AssignmentRow;
