import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
// import RewardCreateForm from '../../components/RewardCreateForm/RewardCreateForm';
import './RewardListRoute.css';

export default class RewardListRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  

  handleRewardCreateSuccess = (id) => {
    const {history} = this.props;
    // history.push(`/goal/${id}`)
    // Change this later
    history.push(`/dashboard`)
  }

  render() {
    return (
      <Section className='RewardCreatePage'>
        <h2>Create Goal</h2>
        <RewardCreateForm
          onRewardCreateSuccess={this.handleRewardCreateSuccess}
        />
      </Section>
    )
  }
}