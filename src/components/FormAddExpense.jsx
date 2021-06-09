import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/walletActions';

class FormAddExpense extends Component {
  constructor() {
    super();
    this.currenciesName = this.currenciesName.bind(this);
  }

  componentDidMount() {
    const { fetchMoviesToState } = this.props;
    fetchMoviesToState();
  }

  currenciesName() {
    const { currencies } = this.props;
    return currencies.map(({ code }) => (
      <option key={ code } value={ code }>{ code }</option>));
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" min="0.01" name="value" id="value" placeholder="10" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" id="description" placeholder="2 Kiwis" />
        </label>
        <label htmlFor="currencies">
          Moeda
          <select name="currencies" id="currencies">
            { this.currenciesName() }
          </select>
        </label>
        <label htmlFor="payment methods">
          Método de pagamento
          <select name="payment methods" id="payment methods">
            <option value="money">Dinheiro</option>
            <option value="credit card">Cartão de crédito</option>
            <option value="debit card">Cartão de débito</option>
            <option value="other">Outro</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
            <option value="others">Outros</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoviesToState: () => dispatch(fetchMovies()),
});

FormAddExpense.propTypes = {
  fetchMoviesToState: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddExpense);
