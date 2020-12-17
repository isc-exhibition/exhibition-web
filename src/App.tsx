import React from 'react';
import {
  Route, Switch, Redirect, BrowserRouter as Router,
} from 'react-router-dom';
import IntroPage from './pages/IntroPage/IntroPage';
import MainPage from './pages/MainPage/MainPage';
import SubjectPage from './pages/SubjectPage/SubjectPage';
import EventPage from './pages/EventPage/EventPage';
import AssignmentPage from './pages/AssignmentPage/AssignmentPage';
import FaqPage from './pages/FAQ/FaqPage';
import CreditPage from './pages/CreditPage/CreditPage';
import Header from './components/Header/Header';
import LogoStand from './components/LogoStand/LogoStand';

function App() {
  return (
    <Router>
      <Header />
      <LogoStand />
      <Switch>
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/intro" component={IntroPage} />
        <Route exact path="/subjectpage/:id" component={SubjectPage} />
        <Route exact path="/event" component={EventPage} />
        <Route exact path="/assignment/:id" component={AssignmentPage} />
        <Route exact path="/faq" component={FaqPage} />
        <Route exact path="/credit" component={CreditPage} />
        <Redirect exact to="/intro" />
      </Switch>
    </Router>
  );
}

export default App;
