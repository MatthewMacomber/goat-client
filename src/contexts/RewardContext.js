import React, {Component} from 'react';
import RewardService from '../services/rewards-api-service';

const RewardContext = React.createContext({
  rewards: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  loadRewards: () => {},
  addReward: () => {},
  modifyReward: () => {}
});

export default RewardContext;

export class RewardProvider extends Component {
  constructor(props) {
    super(props);
    const state = {
      rewards: [],
      error: null
    };
    this.state = state;
  };

  setError = (error) => {
    this.setState({
      error: error.message
    });
  };

  clearError = () => {
    this.setState({
      error: null
    });
  };

  loadRewards = () => {
    // Load rewards into context.
    RewardService.getReward()
      .then(rewards => {
        this.setState({
          rewards
        });
      })
      .catch(this.setError);
  };

  addReward = (reward) => {
    // Add new reward to context after successful submission to server.
    this.setState({
      rewards: this.state.rewards.concat(reward)
    });
  };

  modifyReward = (id, option) => {
    // Modify reward, specifically for purchasing or archiving rewards.
    if (option === 'purchased') {
      // Change reward with id to purchased, server call with reward to purchase.
      RewardService.modifyReward({
          id,
          option
        })
        .then(res => {
          let modRewards = this.state.rewards;
          modRewards[id].purchased = true;
          this.setState({
            rewards: modRewards
          });
        })
        .catch(this.setError);
    } else if (option === 'archive') {
      // Change reward with id to archived, server call with reward to archive.
      RewardService.modifyReward({
          id,
          option
        })
        .then(res => {
          let modRewards = this.state.rewards;
          modRewards[id].archived = true;
          this.setState({
            rewards: modRewards
          });
        })
        .catch(this.setError);
    } else {
      this.setError({
        error: 'Incorrect option for modify reward'
      })
    }
  };

  render() {
    const value = {
      rewards: this.state.rewards,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      loadRewards: this.loadRewards,
      addReward: this.addReward,
      modifyReward: this.modifyReward
    };
    return (
      <RewardContext.Provider value={value}>
        {this.props.children}
      </RewardContext.Provider>
    );
  };
};