import React from 'react';
import { Global, css } from '@emotion/react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import styled from '@emotion/styled';
import Login from './Login';
import UserProvider from './provider/user';
import ListContainer from './containers/ListContainer';
import CreateAssingmentForm from './containers/CreateAssingmentForm';
import Menu from './containers/Menu';

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <Router>
      <UserProvider>
        <Global
          styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          min-height: 100vh;
        }
        #root {
          min-height: 100vh;
        }
      `}
        />
        <Container>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/assignment" component={ListContainer} />
            <Route exact path="/assignment/create" component={CreateAssingmentForm} />
            <Main />
            <Redirect exact to="/assignment" />
          </Switch>
          <Menu />
        </Container>
      </UserProvider>
    </Router>
  );
}

export default App;
