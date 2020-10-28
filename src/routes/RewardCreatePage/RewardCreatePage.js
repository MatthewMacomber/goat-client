import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
import RewardCreateForm from '../../components/RewardCreateForm/RewardCreateForm';
import './RewardCreatePage.css';

export default class RewardCreatePage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  

  handleRewardCreateSuccess = () => {
    const {history} = this.props;
    history.push(`/rewards-list`)
  }


  render() {
    return (
      <div>
        <Section className='GoalCreatePage'>
        <h2>Create Reward</h2>
        <RewardCreateForm
          onRewardCreateSuccess={this.handleRewardCreateSuccess}
        />
      </Section>
      </div>
    )
  }
}

