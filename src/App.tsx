import React from 'react';
import {
  Route, Switch, Redirect, BrowserRouter as Router,
} from 'react-router-dom';
import IntroPage from './pages/IntroPage/IntroPage';
import MainPage from './pages/MainPage/MainPage';
import SubjectPage from './pages/SubjectPage/SubjectPage';
import EventPage from './pages/EventPage/EventPage';
import AssignmentPage from './pages/AssignmentPage/AssignmentPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/intro" component={IntroPage} />
        <Route exact path="/subjectpage" component={SubjectPage} />
        <Route exact path="/event" component={EventPage} />
        <Route exact path="/assignment/:id" component={AssignmentPage} />
        <Redirect exact to="/intro" />
      </Switch>
    </Router>
  );
}

export default App;
