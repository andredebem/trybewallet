import { ADD, SAVE } from './index';

// async function requestAPICurrencies() {
//   const requestAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
//   const response = await requestAPI.json();
//   const currencies = Object.values(response);
//   return currencies;
// }

export const saveCurrencies = (currencies) => ({
  type: SAVE,
  payload: {
    currencies,
  },
});

function deleteUDST(currenciesWithUSDT) {
  const currenciesWithoutUSDT = currenciesWithUSDT;
  currenciesWithUSDT.splice(1, 1);
  return currenciesWithoutUSDT;
}

export function fetchMovies() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((objCurrencies) => Object.values(objCurrencies))
    .then((currenciesWithUSDT) => deleteUDST(currenciesWithUSDT))
    .then((currencies) => dispatch(saveCurrencies(currencies)));
}

export const addExpense = (expense) => ({
  type: ADD,
  payload: {
    expense,
  },
});
