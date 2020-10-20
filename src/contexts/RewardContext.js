import React, { Component } from 'react';
import RewardService from '../services/rewardsApiservice';

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
    const state = { rewards: [], error: null};
    this.state = state;
  };

  setError = (error) => {
    console.log(error);
    this.setState({error});
  };

  clearError = () => {
    this.setState({error: null});
  };

  loadRewards = () => {
    // Load rewards into context.
    RewardService.getReward()
      .then(rewards => {
        this.setState({rewards});
      })
      .catch(this.setError);
  };

  addReward = (reward) => {
    // Add new reward to context after succesful submission to server.
    this.setState({rewards: this.state.rewards.concat(reward)});
  };

  modifyReward = (id, option) => {
    // Modify reward, specifically for achieving or archiving rewareds.
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