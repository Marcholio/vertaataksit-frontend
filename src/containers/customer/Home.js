import React from 'react';
import GoogleAutoComplete from 'react-google-autocomplete';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { getPrices } from '../../actions/customerActions';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  submit() {
    if (this.state.from && this.state.to)
      this.props.submit(this.state.from, this.state.to);
  }

  render() {
    return (
      <div>
        <GoogleAutoComplete
          types={['address']}
          onPlaceSelected={place => {
            this.setState({
              from: {
                lat: place.geometry.location.lat(),
                lon: place.geometry.location.lng(),
              },
            });
          }}
          componentRestrictions={{ country: 'fi' }}
        />
        <GoogleAutoComplete
          types={['address']}
          onPlaceSelected={place =>
            this.setState({
              to: {
                lat: place.geometry.location.lat(),
                lon: place.geometry.location.lng(),
              },
            })
          }
          componentRestrictions={{ country: 'fi' }}
        />
        <Button positive onClick={() => this.submit()}>
          Hae
        </Button>
      </div>
    );
  }
}

Home.propTypes = {
  submit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  submit: (from, to) => dispatch(getPrices(from, to)),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(Home);
