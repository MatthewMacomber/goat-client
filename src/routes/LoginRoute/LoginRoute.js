import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginRoute.css';

export default class LoginRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const {history} = this.props;
    history.push('/dashboard');
  };

  render() {
    return (
      <Section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
        <p>Demo account: 'admin' --- Password: 'pass'</p>{/* TODO Change demo account detail to use actual demo account */}
      </Section>
    );
  };
};