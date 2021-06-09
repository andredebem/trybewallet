import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class FormAddExpense extends Component {
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
            <option value="BRL">BRL</option>
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
