import React from 'react';
import { Button } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

const LoginForm = props => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <label htmlFor="username">Käyttäjänimi</label>
      <Field
        name="username"
        component="input"
        type="text"
        placeholder="user@example.com"
      />
    </div>
    <div>
      <label htmlFor="password">Salasana</label>
      <Field
        name="password"
        component="input"
        type="password"
        placeholder="********"
      />
    </div>
    <Button positive type="submit">
      Kirjaudu sisään
    </Button>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'login' })(LoginForm);
