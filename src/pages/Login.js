import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import loginAction from '../actions/loginAction';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      invalid: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateEmailAndPassword = this.validateEmailAndPassword.bind(this);
  }

  validateEmail(mail) {
    const format = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    // Alessandra passou o Regex que ela utilizou no projeto dela.
    if (mail.match(format)) {
      return true;
    }
    return false;
  }

  validateEmailAndPassword() {
    const { email, password } = this.state;
    const minLength = 6;
    if (this.validateEmail(email) === true && password.length >= minLength) {
      this.setState({
        invalid: false,
      });
    } else {
      this.setState({
        invalid: true,
      });
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    }, () => this.validateEmailAndPassword());
  }

  render() {
    const { email, invalid } = this.state;
    const { loginFunction } = this.props;
    return (
      <form>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            id="email"
            name="email"
            onChange={ this.handleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            onChange={ this.handleChange }
            data-testid="password-input"
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            onClick={ () => loginFunction(email) }
            disabled={ invalid }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginFunction: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  loginFunction: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
