import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import './RegistrationRoute.css'

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className='RegistrationRoute'>
        <div className='RegistrationCard'>
          <h2>Sign up</h2>
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </div>
      </section>
    );
  }
}

export default RegistrationRoute
