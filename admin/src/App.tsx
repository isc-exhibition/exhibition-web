import React from 'react';
import { Global, css } from '@emotion/react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
// import Login from './Login';

function App() {
  return (
    <Router>
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
        {/* <Route exact path="/login" component={Login} /> */}
        <Redirect exact to="/" />
      </Switch>
    </Router>
  );
}

export default App;
