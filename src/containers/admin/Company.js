import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CompanyForm from './CompanyForm';
import { updateCompany } from '../../actions/adminActions';

class Company extends React.Component {
  render() {
    return (
      <div>
        <Link to="/admin">
          <Button negative icon>
            <Icon name="arrow left" />
          </Button>
        </Link>
        <CompanyForm onSubmit={this.props.submit} />
      </div>
    );
  }
}

Company.propTypes = {
  submit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  submit: values => {
    dispatch(updateCompany(values));
  },
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(Company);
