import React, {Component} from 'react';
import './RewardListForm.css';
import RewardContext from '../../contexts/RewardContext';
import RedemptionPopUp from '../RedemptionPopUp/RedemptionPopUp';
 
export default class RewardListForm extends Component{
  
  static contextType = RewardContext;

  state = {
    completingReward: null,
    userContext: {}
  };

  componentWillUnmount() {
    this.context.clearError();
  }
  
  completeReward = () => {
    const {completingReward} = this.state;
    this.context.deleteReward(completingReward)
    .then(() => {
      this.cancelPopUp();
    })
  };

  cancelPopUp = () => {
    this.setState({completingReward: null});
  }

  renderCompletePopUp = () => {
    const {completingReward} = this.state;
    return <RedemptionPopUp 
            question={`Redeem ${completingReward.title}?`}
            points={-completingReward.points}
            yesFunction={this.completeReward}
            noFunction={this.cancelPopUp}/>
  }

  setCompletingReward = (completingReward) => {
    this.setState({completingReward});
  }

  renderRewards = () => {
    const {rewards} = this.context;
    return (
      <div>
      <section className="rewards-list-section">
      <h2>Rewards</h2>
      <ul className="rewards-list">
      {rewards.length <= 0 && <p>No Rewards Set Up!</p>}
      {rewards.length > 0 && rewards.map(reward => (
        <li className="rewards-list-options" key={reward.id}>
          <div>Reward: {reward.title}</div>
          <div>{reward.description}</div>
          <div>Points needed to redeem: {reward.points}</div>
          {this.props.userContext.points >= reward.points && <button onClick={() => this.setCompletingReward(reward)}>Redeem Reward</button>}
        </li>
      ))}
      </ul> 
      </section>
      <button onClick={() => this.props.create()}>Create New Reward</button>
    </div>
    );
  }

  render(){
    const {completingReward} = this.state;
    return(
      <div>
        {!completingReward && this.renderRewards()}
        {completingReward && this.renderCompletePopUp()}
      </div>
    )
  }
}
