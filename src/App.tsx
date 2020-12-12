import React from 'react';
import {
  Route, Switch, Redirect, BrowserRouter as Router,
} from 'react-router-dom';
import IntroPage from './pages/IntroPage/IntroPage';
import MainPage from './pages/MainPage/MainPage';
import EventPage from './pages/EventPage/EventPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/intro" component={IntroPage} />
        <Route exact path="/event" component={EventPage} />
        <Redirect exact to="/intro" />
      </Switch>
    </Router>
  );
}

export default App;
