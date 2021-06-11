import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies, addExpense } from '../actions/walletActions';
import PaymentMethods from './PaymentMethods';
import TagSelect from './TagSelect';

class FormAddExpense extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.currenciesName = this.currenciesName.bind(this);
    this.mountExpense = this.mountExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchMoviesToState } = this.props;
    fetchMoviesToState();
  }

  deleteUDST(currenciesWithUSDT) {
    const currenciesWithoutUSDT = [...currenciesWithUSDT];
    currenciesWithoutUSDT.splice(1, 1);
    return currenciesWithoutUSDT;
  }

  currenciesName() {
    const { currencies } = this.props;
    const currenciesArray = Object.values(JSON.parse(currencies));
    const currenciesWithoutUSDT = this.deleteUDST(currenciesArray);
    return currenciesWithoutUSDT.map(({ code }) => (
      <option key={ code } value={ code }>{ code }</option>));
  }

  async mountExpense() {
    const { expenses } = this.props;
    const nextId = () => (expenses.length);
    const { fetchMoviesToState } = this.props;
    await fetchMoviesToState();
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    const newExpense = {
      id: nextId(),
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: JSON.parse(currencies),
    };
    const { addExpenseToState } = this.props;
    addExpenseToState(newExpense);
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            min="0"
            id="value"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" onChange={ (e) => this.handleChange(e) } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" onChange={ (e) => this.handleChange(e) }>
            { this.currenciesName() }
          </select>
        </label>
        <PaymentMethods handleChange={ this.handleChange } />
        <TagSelect handleChange={ this.handleChange } />
        <button
          type="button"
          onClick={ () => this.mountExpense() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: JSON.stringify(state.wallet.currencies),
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoviesToState: () => dispatch(fetchMovies()),
  addExpenseToState: (expense) => dispatch(addExpense(expense)),
});

FormAddExpense.propTypes = {
  fetchMoviesToState: PropTypes.func.isRequired,
  addExpenseToState: PropTypes.func.isRequired,
  currencies: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddExpense);
