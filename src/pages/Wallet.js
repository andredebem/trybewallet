import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormAddExpense from '../components/FormAddExpense';

class Wallet extends React.Component {
  render() {
    const { emailUser } = this.props;
    return (
      <div>
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
        <FormAddExpense />
      </div>
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
