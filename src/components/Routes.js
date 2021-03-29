import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  Redirect,
} from 'react-router-dom';
// Import for Authentication Context
import Landing from '../pages/Landing';
import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';
import SiteError from '../pages/SiteError';
import Header from './Header';
import Footer from './Footer';

const Routes = () => {
  let history = useHistory();

  return (
    <Router history={history}>
      <Header history={history} />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/error" component={SiteError} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
