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

  componentDidMount = () => {
    if(this.props.userContext.user.id) {
      this.loadRewards();
    }
  }

  loadRewards = () => {
    // Load rewards into context.
    return RewardService.getReward()
      .then(rewards => {
        this.setState({
          rewards
        })
        this.clearError();
      })
      .catch(this.setError);
  };

  addReward = (reward) => {
    return RewardService.addReward(reward)
    .then(() => {
      this.loadRewards();
    })
    .catch(e => {
      this.setError(e);
      return Promise.reject(e);
    });
  };

  modifyReward = (reward) => {
    return RewardService.modifyReward(reward)
    .then(() => {
      this.loadRewards();
    })
    .catch(this.setError);
  };

  deleteReward = (reward) => {
    return RewardService.deleteReward(reward)
    .then(() => {
      this.loadRewards();
    })
    .catch(this.setError);
  };

  render() {
    const value = {
      rewards: this.state.rewards,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      loadRewards: this.loadRewards,
      addReward: this.addReward,
      modifyReward: this.modifyReward,
      deleteReward: this.deleteReward
    };
    return (
      <RewardContext.Provider value={value}>
        {this.props.children}
      </RewardContext.Provider>
    );
  };
};