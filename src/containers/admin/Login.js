import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';
import { login } from '../../actions/adminActions';

class Login extends React.Component {
  render() {
    return (
      <div>
        <LoginForm onSubmit={this.props.submit} />
      </div>
    );
  }
}

Login.propTypes = {
  submit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  submit: values => {
    dispatch(login(values));
  },
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(Login);
