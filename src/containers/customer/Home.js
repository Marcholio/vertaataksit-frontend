import React from 'react';
import GoogleAutoComplete from 'react-google-autocomplete';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, List } from 'semantic-ui-react';

import { getPrices } from '../../actions/customerActions';
import '../../styles/CustomerHome.css';

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
      <div id="customer-view">
        <p>
          Vertaile helposti eri taksien hintoja ja valitse juuri sinulle sopivin
          vaihtoehto
        </p>
        <div id="search-form">
          <GoogleAutoComplete
            types={['address']}
            onPlaceSelected={place => {
              this.setState({
                from: place.formatted_address,
              });
            }}
            componentRestrictions={{ country: 'fi' }}
            placeholder={'Lähtöpaikka'}
          />
          <GoogleAutoComplete
            types={['address']}
            onPlaceSelected={place =>
              this.setState({
                to: place.formatted_address,
              })
            }
            componentRestrictions={{ country: 'fi' }}
            placeholder={'Määränpää'}
          />
          <Button
            color="green"
            onClick={() => this.submit()}
            loading={this.props.loading}
            disabled={
              this.props.loading ||
              !this.state.from ||
              this.state.from === '' ||
              !this.state.to ||
              this.state.to === ''
            }
            id="search-button"
            size="small"
          >
            Hae
          </Button>
        </div>
        <List id="price-list">
          {this.props.prices.map(p => (
            <List.Item key={p.company}>
              <List.Content>
                <p className="company">{p.company}</p>
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
