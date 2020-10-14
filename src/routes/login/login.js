import React, {Component} from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const {history} = this.props;
    const destination = '/dashboard';
    history.push(destination);
    this.props.login(true);
  };

  render() {
    return (
      <section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
        <p>Demo account: 'demo' --- Password: 'P4ssword!'</p>
      </section>
    );
  };
};