import React, { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Heading02 } from 'components/Heading/Heading02';
import { useLocation, Link } from 'react-router-dom';
import { COLORS } from 'utils/theme';

const Container = styled.div`
  padding-top: 120px;
  position: fixed;
  right: 0;
  width: 280px;
  min-width: 280px;
  height: 100vh;
  background-color: ${COLORS.darkGray};

  a {
    text-decoration: none;
  }
`;

function Menu() {
  const location = useLocation();
  const currentPath = location.pathname;
  if (currentPath === '/login') {
    return null;
  }
  return (
    <Container>
      <Link to="/assignment">
        <Heading02 css={css`
            color: ${currentPath === '/assignment' ? COLORS.darkGray : '#ffffff'};
            background-color: ${currentPath === '/assignment' ? COLORS.lightGray : COLORS.darkGray};
            width: 100%;
            padding: 14px 0;
            text-align: center`}
        >
          과제 목록 보기
        </Heading02>
      </Link>
      <Link to="/assignment/create">
        <Heading02 css={css`
        color: ${currentPath === '/assignment/create' ? COLORS.darkGray : '#ffffff'}; 
        background-color: ${currentPath === '/assignment/create' ? COLORS.lightGray : COLORS.darkGray}; 
        width: 100%; 
        padding: 14px 0;
        text-align: center`}
        >
          과제 등록하기
        </Heading02>
      </Link>
    </Container>
  );
}

export default Menu;
