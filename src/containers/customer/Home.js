import React from 'react';
import GoogleAutoComplete from 'react-google-autocomplete';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, List } from 'semantic-ui-react';

import { getPrices } from '../../actions/customerActions';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  submit() {
    if (this.state.from && this.state.to && !this.props.loading)
      this.props.submit(this.state.from, this.state.to);
  }

  render() {
    return (
      <div>
        <GoogleAutoComplete
          types={['address']}
          onPlaceSelected={place => {
            this.setState({
              from: place.formatted_address,
            });
          }}
          componentRestrictions={{ country: 'fi' }}
        />
        <GoogleAutoComplete
          types={['address']}
          onPlaceSelected={place =>
            this.setState({
              to: place.formatted_address,
            })
          }
          componentRestrictions={{ country: 'fi' }}
        />
        <Button
          positive
          onClick={() => this.submit()}
          loading={this.props.loading}
        >
          Hae
        </Button>
        <List>
          {this.props.prices.map(p => (
            <List.Item key={p.company}>
              <List.Content>
                <p>{p.company}</p>
                <p>{p.price.toFixed(2)} €</p>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}

Home.propTypes = {
  submit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  prices: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  loading: state.customer.get('loading'),
  prices: state.customer.get('prices'),
});

const mapDispatchToProps = dispatch => ({
  submit: (from, to) => dispatch(getPrices(from, to)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
