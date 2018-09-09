import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ authenticated, ...rest }) =>
  authenticated ? <Route {...rest} /> : <Redirect to="/login" />;

export default PrivateRoute;
