import SUBMIT from './index';

const loginAction = (email) => ({
  type: SUBMIT,
  payload: {
    email,
  },
});

export default loginAction;
