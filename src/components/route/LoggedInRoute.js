import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LoggedInRoute = ({ component: Component, ...otherProps }) => {
  const authenticated = useSelector((state) => state.user.authenticated);
  return (
    <Route
      {...otherProps}
      render={({ location, otherProps }) =>
        authenticated ? (
          <>
            <Component {...otherProps} />
          </>
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default LoggedInRoute;
