import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import LoginForm from './LoginForm';
import { login } from '../../actions/adminActions';

import '../../styles/Login.css';

class Login extends React.Component {
  render() {
    return (
      <div id="login-page">
        {!this.props.authenticated ? (
          <LoginForm
            onSubmit={this.props.submit}
            loading={this.props.loading}
          />
        ) : (
          <Redirect to="/admin" />
        )}
      </div>
    );
  }
}

Login.propTypes = {
  submit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  authenticated: state.admin.get('authenticated'),
  loading: state.admin.get('loading'),
});

const mapDispatchToProps = dispatch => ({
  submit: values => {
    dispatch(login(values));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
