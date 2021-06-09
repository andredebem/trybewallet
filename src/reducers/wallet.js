import { ADD, SAVE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE:
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  case ADD:
    return {
      ...state,
      expenses: action.payload.expenses,
    };
  default:
    return state;
  }
};

export default wallet;
