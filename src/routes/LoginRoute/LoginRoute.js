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
    this.props.login(true);
  };

  render() {
    return (
      <Section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
        <p>Demo account: 'demo' --- Password: 'P4ssword!'</p>{/* TODO Change demo account detail to use actual demo account */}
      </Section>
    );
  };
};