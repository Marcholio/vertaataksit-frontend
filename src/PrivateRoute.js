import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ authenticated, ...rest }) =>
  authenticated ? <Route {...rest} /> : <Redirect to="/login" />;

const mapStateToProps = state => ({ authenticated: state.authenticated });

export default connect(mapStateToProps)(PrivateRoute);
