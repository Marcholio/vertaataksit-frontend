import React from 'react';
import { Button } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

const CompanyForm = props => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <label htmlFor="companyName">Yritys</label>
      <Field name="companyName" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="startPrice">Aloitusmaksu</label>
      <Field
        name="startPrice"
        component="input"
        type="number"
        step={0.01}
        min={0}
      />
    </div>
    <div>
      <label htmlFor="price">Hinta (€/km)</label>
      <Field name="price" component="input" type="number" step={0.01} min={0} />
    </div>
    <Button positive type="submit">
      Tallenna
    </Button>
  </form>
);

CompanyForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'company' })(CompanyForm);
