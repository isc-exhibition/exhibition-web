import React from 'react';
import {
  Route, Switch, Redirect, BrowserRouter as Router,
} from 'react-router-dom';
import IntroPage from './pages/IntroPage/IntroPage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/intro" component={IntroPage} />
        <Redirect exact to="/intro" />
      </Switch>
    </Router>
  );
}

export default App;
