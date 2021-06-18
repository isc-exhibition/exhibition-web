import React from 'react';
import { Global, css } from '@emotion/react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import Login from './Login';
import UserProvider from './provider/user';
import ListContainer from './containers/ListContainer';

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
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/assignment" component={ListContainer} />
          <Redirect exact to="/" />
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
