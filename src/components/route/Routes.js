import React from 'react';
import LoggedInRoute from './LoggedInRoute';
import LoggedOutRoute from './LoggedOutRoute';
import Landing from '../../pages/Landing';
import Auth from '../../pages/Auth';
import Dashboard from '../../pages/Dashboard';
import SiteError from '../../pages/SiteError';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import history from '../../util/history';

const Routes = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <LoggedOutRoute
          exact={true}
          path="/"
          component={Landing}
          history={history}
        />
        <LoggedOutRoute
          exact={true}
          path="/auth"
          component={Auth}
          history={history}
        />
        <LoggedInRoute
          exact={true}
          path="/dashboard"
          component={Dashboard}
          history={history}
        />
        <Route component={SiteError} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
