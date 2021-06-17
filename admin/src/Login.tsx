import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import axios, { AxiosResponse } from 'axios';
import Input from './Input/Input';
import LoginButton from './Input/LoginButton';
import { getRestApiEndpoint } from './config.api';
import { UserContext } from './provider/user';

const Container = styled.div`
  width: 100vw;
  box-sizing: border-box;
  height: 100vh;
  padding: 24px;
  background-color: #555555;
  display: flex;
  align-items: center;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  width: 100%;
`;

const Heading01 = styled.h1`
  font-size: 50px;
  color: #ffffff;
  margin-bottom: 68px;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 680px;
  margin-right: 220px;
  margin-bottom: 40px;
`;

const Heading02 = styled.h2`
  font-size: 48px;
  color: #ffffff;
  margin: 12px 40px 12px 0
`;

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const { isLogin, login } = useContext(UserContext);

  const handleIdInput = (value: string) => {
    setId(value);
  };

  const handlePasswordInput = (value: string) => {
    setPassword(value);
  };

  const endpoint = getRestApiEndpoint();

  const handleLogin = async () => {
    if (id && password) {
      axios.post(`${endpoint}/auth/signin`, { user_id: id, password })
        .then((res: AxiosResponse<any>) => {
          login(res.data);
          // TODO: 메인 페이지로 이동하게 만들기
          login('얍');
        })
        .catch(() => {
          // console.error(e);
          alert('로그인에 실패하셨습니다. 아이디 또는 비밀번호를 확인해주세요');
        });
    }
  };

  return (
    <Container>
      <BoxContainer>
        <Heading01>
          과제전 어드민
        </Heading01>
        <InputBox>
          <Heading02>아이디</Heading02>
          <Input type="text" maxLength={20} css={css`width: 447px; font-size: 42px`} handleChange={handleIdInput} handleEnter={handleLogin} value={id} />
        </InputBox>
        {' '}
        <InputBox>
          <Heading02>비밀번호</Heading02>
          <Input type="password" maxLength={30} css={css`width: 447px; font-size: 42px`} handleChange={handlePasswordInput} handleEnter={handleLogin} value={password} />
        </InputBox>
        <InputBox>
          <LoginButton orangeColor onClick={handleLogin} css={css`width: 447px; height: 80px; font-size: 42px; margin-top: 12px;`}>
            로그인
          </LoginButton>
        </InputBox>
      </BoxContainer>
    </Container>
  );
}

export default Login;
