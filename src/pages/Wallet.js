import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { emailUser } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          User:&nbsp;
          {/* O código acima é para adicionar um espaço "forçado"
          entre a primeira linha e a segunda */}
          { emailUser }
        </span>
        <span data-testid="total-field">
          Total expenses:&nbsp;
          { 0 }
        </span>
        <span data-testid="header-currency-field">
          BRL
        </span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
});

Wallet.propTypes = {
  emailUser: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
