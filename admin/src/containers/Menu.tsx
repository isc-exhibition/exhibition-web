/* eslint-disable max-len */
import React, { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Heading02 } from 'components/Heading/Heading02';
import { useLocation, Link } from 'react-router-dom';
import { COLORS } from 'utils/theme';
import ISCLogo from 'assets/isc_icon.png';
import { Heading01 } from 'components/Heading/Heading01';

const Container = styled.div`
  position: fixed;
  right: 0;
  width: 280px;
  min-width: 280px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;

  a {
    text-decoration: none;
  }
`;

const TopDiv = styled.div`
  height: 13vh;
  border-bottom-left-radius: 20px;
  background-color: ${COLORS.gray};
`;

const BottomDiv = styled.div`
  height: 67vh;
  border-top-left-radius: 20px;
  background-color: ${COLORS.gray};
`;

function Menu() {
  const location = useLocation();
  const currentPath = location.pathname;
  if (currentPath === '/login') {
    return null;
  }

  return (
    <Container>
      <TopDiv css={css`
        border-bottom-left-radius: ${currentPath === '/assignment' ? '20px' : 0};
      `}
      >
        <Link to="/assignment" css={css`display: flex; justify-content: space-evenly; align-items: center; margin: 25px 30px;`}>
          <img src={ISCLogo} alt="ISC Logo" css={css`width: 65px;`} />
          <Heading01 css={css`font-size: 40px; color: #ffffff`}>어드민</Heading01>
        </Link>
      </TopDiv>
      <Link
        to="/assignment"
        css={css`
        height: 10vh;
        background-color: ${currentPath === '/assignment' ? COLORS.lightGray : COLORS.gray};
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom-left-radius: ${currentPath === '/assignment' ? 0 : '20px'};
        `}
      >
        <Heading02 css={css`
          font-size: 22px;
          font-weight: bold;
          color: ${currentPath === '/assignment' ? COLORS.gray : '#ffffff'};`}
        >
          과제 목록 보기
        </Heading02>
      </Link>
      <Link
        to="/assignment/create"
        css={css`
          height: 10vh;
          background-color: ${currentPath === '/assignment/create' ? COLORS.lightGray : COLORS.gray};
          border-top-left-radius: ${currentPath === '/assignment/create' ? 0 : '20px'};
          display: flex;
          justify-content: center;
          align-items: center;`}
      >
        <Heading02 css={css`
          font-size: 22px;
          font-weight: bold;
          color: ${currentPath === '/assignment/create' ? COLORS.gray : '#ffffff'};
          `}
        >
          과제 등록하기
        </Heading02>
      </Link>
      <BottomDiv css={css`
        border-top-left-radius: ${currentPath === '/assignment/create' ? '20px' : 0};
      `}
      />
    </Container>
  );
}

export default Menu;
