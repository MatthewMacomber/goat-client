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
        <div className="demo-info">
          <p>Demo account: 'admin'</p>
          <p>Password: 'pass'</p>
        </div>
      </Section>
    );
  };
};