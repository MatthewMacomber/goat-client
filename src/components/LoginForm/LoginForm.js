import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import AuthApiService from '../../services/auth-api-service';
import {Input, Button} from '../Utils/Utils';
import './LoginForm.css';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = {error: null};

  static contextType = UserContext;

  handleSubmitAuth = ev => {
    ev.preventDefault();
    this.setState({error: null});
    const {user_name, password} = ev.target;
    AuthApiService.postLogin({
      username: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = '';
        password.value = '';
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(error => {
        this.setState({error: error.message});
      });
  };

  render() {
    const {error} = this.state;
    return (
      <div className='login-form-page login-flex-container'>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <form className='login-form login-flex-container' onSubmit={this.handleSubmitAuth}>
          <label htmlFor='LoginForm__user_name'>User name:</label>
          <Input
            name='user_name'
            required
            id='LoginForm__user_name'
          />
          <label htmlFor='LoginForm__password'>Password:</label>
          <Input
            name='password'
            type='password'
            required
            id='LoginForm__password'
          />
          <footer>
            <Button type='submit'>Login</Button>
            <Link to='/register' id='need-account-link'>Need an account?</Link>
          </footer>
        </form>
      </div>
    );
  };
};